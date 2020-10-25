
export const addSetter = ({ useState, useEffect }, store) => {
    const setter = useState({})[1];
    store.setter = () => setter({});
    useEffect(() => () => store.setter = null, []);
}
