const common = {
  //获取储存
  getStorage: (name) => {
    try {
      return JSON.parse(localStorage.getItem(name))
    }
    catch (err) {
      return localStorage.getItem(name)
    }
  },

  replace: (oTarget) => { //-----移除左右空格-----
    if (!oTarget) {
      return
    }

    let re = /^\s*(.*?)\s*$/;
    return oTarget.toString().replace(re, '$1');
  },

  //删除储存
  delStorage: (name) => {
    localStorage.removeItem(name)
  },
  //设置储存
  setStorage: (name, value) => {
    localStorage.setItem(name, value)
  },
  //  获取当前语言
  getLanguage() {
    try {
      let JsSrc = (navigator.language || navigator.browserLanguage).toLowerCase();
      if (JsSrc.indexOf('zh') >= 0) {
        return 'zh'
        // 假如浏览器语言是中文
      } else {
        return 'en'
      }
    }
    catch (err) {
      return 'zh'
    }
  },
}
export default common
