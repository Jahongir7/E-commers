import React from "react";
import "./Auth.css";
import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();
  alert("Xabar jo'natildi !");
  emailjs
    .sendForm(
      "service_k4c5zjk",
      "template_obq6dfd",
      e.target,
      "user_m3kwBZBQKUj0lJiOhs8fa"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}

const Auth = () => {
  return (
    <div className="half" id="auth">
      <div className="text_center1">
        <h2>
          <b>Murojat etish</b>
        </h2>
        <p>
          Biz bilan birga bo'ling va O'z mahsulotingizni reklama qilish uchun
          sayt administratoriga xabar yo'llang
        </p>
      </div>
      <form className="form1" onSubmit={sendEmail}>
        <div className="form_qobiq2">
          <div className="form-group1">
            <input
              type="text"
              name="name"
              className="form-control1"
              required
              placeholder="Ismingiz"
            />

            <div className="clr"></div>
          </div>

          <div className="form-group1">
            <input
              type="email"
              name="email"
              className="form-control1"
              required
              placeholder="Email"
            />

            <div className="clr"></div>
          </div>

          <div className="form-group1">
            <textarea
              name="message"
              placeholder="Xabarnoma"
              className="form-control1"
              required
            />

            <div className="clr"></div>
          </div>

          <div className="form-group6">
            <button type="submit" className="btn1 btn-primary button-me">
              Yuborish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Auth;
