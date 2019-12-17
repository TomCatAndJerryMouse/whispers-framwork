/**
 * 国际化文件加载
 * @param {国际化对象} nls 
 */
let _locale = "zh";
let loaderNls = function (nls) {
    if (window.location.href.search('lang=en') > 0)
    {
        _locale = 'en';
    }
    if (nls.locales[_locale]) {
       return  nls.locales[_locale].default;
    } else {
        return nls.default;
    }
}
export { loaderNls,_locale}