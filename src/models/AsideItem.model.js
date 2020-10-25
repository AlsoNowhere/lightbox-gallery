
let i = 0;

export const AsideItem = function(
    icon,
    label,
    action,
    initiallyHidden = false
){
    this.id = ++i;

    this.icon = icon;
    this.label = label;
    this.initiallyHidden = initiallyHidden;
    this.action = action;

    Object.freeze(this);
}
