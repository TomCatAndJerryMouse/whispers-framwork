let _locale = "zh";
console.log("2222" + window.location);
if (window.location.href === 'en')
{
    console.log("_locale = 'en';");
    _locale = 'en';
}
else
{
    console.log("_locale = 'zh';");
    _locale = 'zh';
}