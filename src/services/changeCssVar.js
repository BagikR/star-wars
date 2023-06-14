export const changeCssVar = theme => {
    const root = document.querySelector(':root');
    const cssVar = ['header', 'bgimage'];

    cssVar.forEach(cssVar => {
            root.style.setProperty(`--theme-default-${cssVar}`, 
            `var(--theme-${theme}-${cssVar})`);
        });
}