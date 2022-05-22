export function setCookie(name, value, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path";
  }

export function removeCookie(key)
{
    //document.cookie = (key+"=;path");
    document.cookie = (key+"=[]");
}

export function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

export function spliceCookie(_i)
{
  var parsed = JSON.parse(getCookie("products"));
  parsed.splice(_i, 1);

  removeCookie("products");
  setCookie("products", JSON.stringify(parsed))
  return JSON.parse(getCookie("products"))
}