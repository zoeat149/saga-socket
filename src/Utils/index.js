export function formatName(label) {
    // your logic
  }
  
  export function formatDate(date) {
    // your logic
  }
  
  export function formatNumber(nStr) {
    if (typeof nStr === "undefined") {
      return 0;
    } else {
      nStr += "";
      x = nStr.split(".");
      x1 = x[0];
      x2 = x.length > 1 ? "." + x[1] : "";
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "," + "$2");
      }
      return x1 + x2;
    }
  }
  
  export function getValueNumber(pValue, pKey) {
    if (typeof pValue === "undefined") {
      return 0;
    } else {
      return formatNumber(pValue[pKey]);
    }
  }
  
  export function getValue(pValue, pKey) {
    if (typeof pValue === "undefined") {
      return 0;
    } else {
      return pValue[pKey];
    }
  }
  
  export function StringSplit(value, delimeter) {
    if (typeof value != "undefined" && value != null) {
      var item = value.split(delimeter);
      return item;
    } else {
      return "";
    }
  }
  export function getValueFromData0(pValue, pKey) {
    if (
      typeof pValue !== "undefined" &&
      typeof pValue.data !== "undefined" &&
      pValue.data != null
    ) {
      return pValue.data[0][pKey];
    } else {
      return "";
    }
  }
  export function getTradingCenterName(pTradingCenter) {
    switch (pTradingCenter) {
      case "10":
        return "HSX";
      case "02":
        return "HNX";
      case "03":
        return "UPCOM";
      case "04":
        return "PS";
      case "11":
        return "VN30";
      case "12":
        return "HNX30";
      default:
        return pTradingCenter;
    }
  }
  export function GetStatusName(pStatus) {
    switch (pStatus) {
      case "P":
        return "Open";
      case "O":
        return "Continous";
      case "A":
        return "Close";
      case "C":
        return "Puthrougth";
      case "K":
        return "Close";
      default:
        return "Close";
    }
  }
  export function StringSplitVol(value) {
    if (typeof value != "undefined" && value != null) {
      var vValue = value + "";
      var item = vValue.split("|")[1];
      if (item == "0" || item == "0.0" || item == "0.00") item = "-";
      return formatNumber(item);
    } else {
      return "";
    }
  }
  export function StringSplitPrice(value) {
    if (typeof value != "undefined" && value != null) {
      var vValue = value + "";
      var item = vValue.split("|")[0];
      if (item == "0" || item == "0.0" || item == "0.00") item = "-";
      return item;
    } else {
      return "";
    }
  }
  // Kiem tra phan tu the_element co trong danh sach the_list hay khong
  export function ListHaveElement(the_list, the_element, the_separator) {
    try {
      if (the_list == "") return -1;
      if (the_list == the_element) return 1;
      if (the_list.indexOf(the_separator) == -1) return -1;
      arr_value = the_list.split(the_separator);
      for (var i = 0; i < arr_value.length; i++) {
        if (arr_value[i] == the_element) {
          return i;
        }
      }
    } catch (e) {}
    return -1;
  }
  //Dem so phan tu trong danh sach
  export function ListCountElement(the_list, the_separator) {
    if (the_list == "") return -1;
    arr_value = the_list.split(the_separator);
    if (arr_value.length > 0) {
      return arr_value.length;
    }
    return -1;
  }
  // add a value to a list
  export function ListAppend(the_list, the_value, the_separator) {
    var list = the_list;
    the_value = the_value + ""; //Chuyen the_value sang kieu xau
    if (list == "") list = the_value;
    else if (the_value != "") list = list + the_separator + the_value;
    return list;
  }
  
  export function ListRemove(pList, pValue, separator) {
    var vList = pList;
    var vValue = pValue + separator; //Chuyen the_value sang kieu xau
    vList = pList.replace(vValue, "");
    vList = vList.replace(pValue, "");
    return vList;
  }
  
  export function checkStock(listStock, code) {
    for (var i = 0; i < listStock.length; i++) {
      if (listStock[i].stock_code == code) {
        return true;
      }
    }
    return false;
  }
  
  export function checkIsNumber(pValue) {
    //Handler called on button click
    if (isNaN(pValue)) {
      return false;
    } else {
      return true;
    }
  }
  
  export function StringToNumber(pValue) {
    return Number(pValue);
  }
  
  //**********************************************************************************************************************
  // function replace(string,text,by)
  // Thay the ky tu trong mot chuoi
  //**********************************************************************************************************************
  export function Replace(pString, pText, by) {
    var strLength = pString.length,
      txtLength = pText.length;
    if (strLength == 0 || txtLength == 0) return pString;
    var vIndex = pString.indexOf(pText);
    while (vIndex >= 0) {
      pString = pString.replace(pText, by);
      vIndex = pString.indexOf(pText);
    } //End While
    return pString;
  }
  //Chuyen tu xau sang so Float
  export function StringToFloat(pString) {
    //pString = Replace(pString, ",", "");
    //Convert sang so he so 10
    var vFloat = parseFloat(pString);
    if (isNaN(vFloat)) {
      return 0;
    } else {
      return vFloat;
    }
  }
  //Chuyen tu xau sang so Int
  export function StringToInt(pString) {
    pString = Replace(pString, ",", "");
    //Convert sang so he so 10
    var vInt = parseInt(pString, 10);
    if (isNaN(vInt)) {
      return 0;
    } else {
      return vInt;
    }
  }
  
  export function StringToDouble(pString) {
    pString = Replace(pString, ",", "");
    //Convert sang so he so 10
    var vFloat = parseFloat(pString);
    if (isNaN(vFloat)) {
      return 0;
    } else {
      return vFloat;
    }
  }
  
  export function GetOrderSideName(pGroup, pSide) {
    if (pGroup == "FU") {
      switch (pSide) {
        case "B":
          return "LONG";
        case "S":
          return "SHORT";
        default:
          return pSide;
      }
    } else {
      switch (pSide) {
        case "B":
          return "MUA";
        case "S":
          return "BÁN";
        default:
          return pSide;
      }
    }
  }
  
  export function GetIndexName(pTradingCenter) {
    switch (pTradingCenter) {
      case "10":
        return "VN";
      case "02":
        return "HNX";
      case "03":
        return "UPCOM";
      case "04":
        return "INDEXF";
      case "11":
        return "VN30";
      case "12":
        return "HNX30";
      default:
        return pTradingCenter;
    }
  }
  export function GetTradingCenterName(pTradingCenter) {
    switch (pTradingCenter) {
      case "10":
        return "HSX";
      case "02":
        return "HNX";
      case "03":
        return "UPCOM";
      case "04":
        return "PS";
      case "11":
        return "VN30";
      case "12":
        return "HNX30";
      default:
        return pTradingCenter;
    }
  }
  
  export function GetOrderStatusName(
    pGroup,
    pStatus,
    pMatchVolume,
    pVolume,
    pQuote
  ) {
    //console.log("pStatus:",pStatus, "pMatchVolume:",pMatchVolume, "pVolume:",pVolume,"pQuote:",pQuote);
    //Khop mot phan
    if (pStatus == "PMC" && StringToInt(pMatchVolume) < StringToInt(pVolume)) {
      return "Khớp 1 phần";
    }
    //Khop toan bo
    if (pStatus == "PMC" && StringToInt(pMatchVolume) == StringToInt(pVolume)) {
      return "Khớp hết";
    }
    ///Khop 1 phan da huy
    if (pStatus == "PMX" && StringToInt(pMatchVolume) < StringToInt(pVolume)) {
      return "Đã hủy";
    }
    //Cho sua
    if (pStatus == "PCW") {
      return "Chờ sửa";
    }
  
    //Khop mot phan
    if (pStatus == "PM" && StringToInt(pMatchVolume) < StringToInt(pVolume)) {
      return "Khớp 1 phần";
    }
    //Khop toan bo
    if (pStatus == "PM") {
      return "Khớp hết";
    }
    //Cho khop
    if (pStatus == "P") {
      return "Chờ khớp";
    }
    //Cho huy
    if (pStatus == "PW") {
      return "Chờ hủy";
    }
    //Cho sua
    if (pStatus == "PC") {
      //Neu chua len so thi lenh cho khop, con khong cho sua
      if (pQuote == "Y") return "Chờ khớp";
      else return "Chờ sửa";
    }
    //Da huy
    if (pStatus.substring(pStatus.length - 1, pStatus.length) == "X") {
      return "Đã hủy";
    }
    //Khop toan bo
    if (pStatus.substring(pStatus.length - 1, pStatus.length) == "M") {
      return "Khớp hết";
    }
    //Cho khop
    if (pStatus.substring(pStatus.length - 1, pStatus.length) == "C") {
      return "Chờ khớp";
    }
    return pStatus;
  }
  
  export function getDate() {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    return date + "-" + month + "-" + year;
  }
  
  export function getBeginDate() {
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 7);
    var date = currentDate.getDate(); //Current Date
    var month = currentDate.getMonth() + 1; //Current Month
    var year = currentDate.getFullYear(); //Current Year
    return date + "-" + month + "-" + year;
  }
  
  export function ReplaceContainVietnamese(pValue) {
    var vValue = pValue;
    vValue = pValue.toLowerCase();
    vValue = vValue.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a");
    vValue = vValue.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e");
    vValue = vValue.replace(/í|ì|ỉ|ĩ|ị/gi, "i");
    vValue = vValue.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o");
    vValue = vValue.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u");
    vValue = vValue.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y");
    vValue = vValue.replace(/đ/gi, "d");
    return vValue;
  }
  