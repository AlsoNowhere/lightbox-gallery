
export const Store = function(
    setUpData
){
    Object.entries(setUpData).forEach(([name, value]) => {
        let _value = value;
        Object.defineProperty(this, name, {
            get: () => _value,
            set: value => {
                _value = value;
                this.setter && this.setter();
            }
        });
    });

    this.setter = null;

    Object.seal(this);
}
