import React, { useEffect, useRef, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Modal } from "../common/Modal.component";
import { Field } from "../common/Field.component";

import { changeQuery, changeState } from "../../slices/search-modal.slice";

export const SearchModal = () => {

    const formReference = useRef(null);

    const [query, setQuery] = useState("");
    
    const searchModal = useSelector(state => state.searchModal);

    const dispatch = useDispatch();

    const onSubmit = event => {
        event.preventDefault();
        dispatch(changeQuery(query));
    }

    useEffect(() => {
        formReference.current && formReference.current["query"].focus();
    }, [searchModal.state]);

    return (
        <Modal title="Search"
            state={searchModal.state}
            onClose={() => dispatch(changeState(""))}>
            <form name="search-images"
                onSubmit={onSubmit}
                ref={formReference}>
                <Field name="query"
                    label="Search value"
                    value={query}
                    onChange={value => setQuery(value)}
                    required={true} />

                <button>Search</button>

                <button type="button"
                    className="grey"
                    onClick={() => {
                        setQuery("");
                        dispatch(changeQuery(""));
                    }}>Clear</button>

                <button type="button"
                    className="grey"
                    onClick={() => dispatch(changeState(""))}>Close</button>
            </form>
        </Modal>
    );
}
