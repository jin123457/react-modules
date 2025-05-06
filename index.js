import { useState as u } from "react";
const o = {
  isNumber: (e) => /^[0-9]+$/.test(e),
  isValidLength: (e, r) => e.length === r,
  isValidMonth: (e) => {
    const r = Number(e);
    return !(r < 1 || r > 12);
  },
  isValidYear: (e) => {
    const r = Number(e);
    return !((/* @__PURE__ */ new Date()).getFullYear() % 100 > r);
  },
  isValidateDate: (e, r) => {
    const a = Number(e), s = Number(r);
    return !((/* @__PURE__ */ new Date()).getFullYear() % 100 === s && (/* @__PURE__ */ new Date()).getMonth() + 1 > a);
  }
}, c = (e) => {
  const r = {
    first: !1,
    second: !1,
    third: !1,
    fourth: !1
  };
  let a = "";
  for (const [s, t] of Object.entries(e)) {
    const n = s;
    if (!o.isNumber(t) && t !== "") {
      r[n] = !0, a = "숫자만 입력하세요.";
      break;
    }
    if (!o.isValidLength(t, 4) && t !== "") {
      r[n] = !0, a = "4자리 숫자를 입력하세요.";
      break;
    }
  }
  return { errorState: r, errorMessage: a };
}, l = {
  first: "",
  second: "",
  third: "",
  fourth: ""
};
function m() {
  const [e, r] = u(l), a = (s, t) => {
    const n = s.target.value;
    r((i) => ({ ...i, [t]: n }));
  };
  return {
    cardNumber: e,
    errorState: c(e),
    handleCardNumberChange: a
  };
}
const f = (e) => {
  const r = {
    errorState: !1,
    errorMessage: ""
  };
  return !o.isNumber(e) && e !== "" ? { errorState: !0, errorMessage: "숫자만 입력하세요." } : !o.isValidLength(e, 3) && e !== "" ? { errorState: !0, errorMessage: "3자리 숫자를 입력하세요." } : r;
};
function v() {
  const [e, r] = u(""), a = (s) => {
    const t = s.target.value;
    r(t);
  };
  return {
    cvc: e,
    errorState: f(e),
    handleCvcChange: a
  };
}
const d = (e) => {
  const r = {
    year: !1,
    month: !1
  };
  let a = "";
  for (const [s, t] of Object.entries(e)) {
    const n = s;
    if (!o.isNumber(t) && t !== "") {
      r[n] = !0, a = "숫자만 입력하세요.";
      break;
    }
    if (!o.isValidLength(t, 2) && t !== "") {
      r[n] = !0, a = "2자리 숫자를 입력하세요.";
      break;
    }
    if (!o.isValidMonth(t) && n === "month" && t !== "") {
      r[n] = !0, a = "유효한 월을 입력하세요.";
      break;
    }
    if (!o.isValidYear(t) && n === "year" && t !== "") {
      r[n] = !0, a = "지나지 않은 연도를 입력해주세요.";
      break;
    }
    if (!o.isValidateDate(e.month, e.year) && e.month !== "" && e.year !== "") {
      r[n] = !0, a = "지나지 않은 날짜를 입력해주세요.";
      break;
    }
  }
  return { errorState: r, errorMessage: a };
}, h = {
  year: "",
  month: ""
};
function M() {
  const [e, r] = u(h), a = (s, t) => {
    const n = s.target.value;
    r((i) => ({ ...i, [t]: n }));
  };
  return {
    expiration: e,
    errorState: d(e),
    handleExpirationChange: a
  };
}
const g = (e) => {
  const r = {
    errorState: !1,
    errorMessage: ""
  };
  return !o.isNumber(e) && e !== "" ? { errorState: !0, errorMessage: "숫자만 입력하세요." } : !o.isValidLength(e, 2) && e !== "" ? { errorState: !0, errorMessage: "2자리 숫자를 입력하세요." } : r;
};
function N() {
  const [e, r] = u(""), a = (s) => {
    const t = s.target.value;
    r(t);
  };
  return {
    password: e,
    errorState: g(e),
    handlePasswordChange: a
  };
}
export {
  m as useCardNumber,
  v as useCvc,
  M as useExpiration,
  N as usePassword
};
