const theme = {
    mode: 'normal',
    types: ['normal','dark', 'light'],
    changeMode: (mode) => {
        if(types.includes(mode)) this.mode = mode;
    }
}