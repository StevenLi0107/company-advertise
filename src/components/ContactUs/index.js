import React from "react";
import { contactUs } from "../../redux/actions/formsActions";
import { getBase64 } from "../../utils/base64";
import { useDispatch } from "react-redux";
import { isEmpty } from "../../utils/stringUtils";

const ContactUs = ({ ref }) => {
  const [activeButtons, setActiveButtons] = React.useState([]);
  const [activeInputs, setActiveInputs] = React.useState([]);
  const fileRef = React.useRef();
  const [form, setForm] = React.useState({
    companyName: {
      text: "",
      error: false,
    },
    email: {
      text: "",
      error: false,
    },
    phoneNumber: {
      text: "",
      error: false,
    },
    projectDetails: {
      text: "",
      error: false,
    },
    attachment: {
      name: "",
      body: "",
    },
  });
  const dispatch = useDispatch();

  const handleActiveButtons = (num) => {
    if (activeButtons.some((n) => n === num)) {
      return setActiveButtons((prev) => prev.filter((n) => n !== num));
    }
    setActiveButtons([...activeButtons, num]);
  };

  const handleChangeForm = (e) => {
    if (e.target.name === "phoneNumber" && isNaN(e.target.value)) return;
    setForm({
      ...form,
      [e.target.name]: {
        ...form[e.target.name],
        text: e.target.value,
      },
    });
  };

  const handleActiveInput = (num, e) => {
    if (activeInputs.some((n) => n === num) && form[e.target.name] === "") {
      return setActiveInputs((prev) => prev.filter((n) => n !== num));
    }
    setActiveInputs([...activeInputs, num]);
  };

  const handleAttachOnChange = () => {
    const _file = fileRef.current.files[0];
    if (_file && _file.size > 26000000) {
      return alert("Размер файла должен быть меньше 25МБ");
    }
    getBase64(_file)
      .then((res) =>
        setForm((prev) => {
          return {
            ...prev,
            attachment: {
              name: _file.name,
              body: res,
            },
          };
        })
      )
      .catch((e) => console.log(e));
  };

  const handleAttachClick = () => {
    fileRef.current.click();
  };

  const handleSubmit = () => {
    const a = Object.entries(form).map(([key, value]) =>
      !isEmpty(value.text)
        ? { ...value, key }
        : {
            ...value,
            error: true,
            key,
          }
    );
    if (a.some((el) => el.error)) {
      const b = a.reduce((acum, item) => {
        return {
          ...acum,
          [item.key]: {
            ...item,
          },
        };
      }, {});
      setForm(b);
    }
    const query = {
      companyName: form.companyName.text,
      email: form.email.text,
      phoneNumber: form.phoneNumber.text,
      projectDetails: form.projectDetails.text,
      attachment: {
        body: form.attachment.body.split(",")[1],
        name: form.attachment.name,
      },
    };
    dispatch(contactUs(query));
  };

  return (
    <div
      ref={ref}
      class="WriteToUs-ColorContainer-module--cls2--1yHxW WriteToUs-ColorContainer-module--cls1--1WAkb"
    >
      <div class="WidthContainer-OuterContainer-module--cls2--2akaW WidthContainer-OuterContainer-module--cls1--1qDQ4">
        <div class="WidthContainer-InnerContainer-module--cls2--32dv6 WidthContainer-InnerContainer-module--cls1--1Ms9D">
          <div class="WriteToUs-ContentContainer-module--cls2--34jXv WriteToUs-ContentContainer-module--cls1--2T6EL">
            <div class="WriteToUs-TitleContainer-module--cls2--XfiLy WriteToUs-TitleContainer-module--cls1--1mizr">
              <h2 class="WriteToUs-Title-module--cls2--2lz11 WriteToUs-Title-module--cls1--eAm0h">
                Напишите нам
              </h2>
              <div class="WriteToUs-SubTitleDesktop-module--cls2--1zXJu WriteToUs-SubTitleDesktop-module--cls1--2fNo5 WriteToUs-SubTitle-module--cls2--aoEkH WriteToUs-SubTitle-module--cls1--h_gez">
                Мы поможем с оценкой
                <br />и планированием Вашего
                <br /> проекта
              </div>
              <div class="WriteToUs-SubTitleMobile-module--cls2--2eWgk WriteToUs-SubTitleMobile-module--cls1--bs1RI WriteToUs-SubTitle-module--cls2--aoEkH WriteToUs-SubTitle-module--cls1--h_gez">
                Мы поможем с оценкой
                <br />и планированием Вашего проекта
              </div>
            </div>
            <form class="WriteToUsForm-Container-module--cls2--3wH_r WriteToUsForm-Container-module--cls1--1VBKW">
              <div class="WriteToUsForm-FieldsContainer-module--cls2--ClWIA WriteToUsForm-FieldsContainer-module--cls1---vdOw">
                <div class="WriteToUsForm-MobileStub-module--cls2--3gevH WriteToUsForm-MobileStub-module--cls1--TJXGf"></div>
                <div class="ChipSelectGroup-Container-module--cls2--3HbHV ChipSelectGroup-Container-module--cls1--2kZEL">
                  <div
                    onClick={handleActiveButtons.bind(null, 0)}
                    class={`ChipSelectGroup-Chip-module--cls2--2tjD1 ChipSelectGroup-Chip-module--cls1--336ll ${
                      activeButtons.some((num) => num === 0)
                        ? "ChipSelectGroup-Chip-module--active--1El6c"
                        : ""
                    }`}
                  >
                    Mobile
                  </div>
                  <div
                    onClick={handleActiveButtons.bind(null, 1)}
                    class={`ChipSelectGroup-Chip-module--cls2--2tjD1 ChipSelectGroup-Chip-module--cls1--336ll ${
                      activeButtons.some((num) => num === 1)
                        ? "ChipSelectGroup-Chip-module--active--1El6c"
                        : ""
                    }`}
                  >
                    Web
                  </div>
                  <div
                    onClick={handleActiveButtons.bind(null, 2)}
                    class={`ChipSelectGroup-Chip-module--cls2--2tjD1 ChipSelectGroup-Chip-module--cls1--336ll ${
                      activeButtons.some((num) => num === 2)
                        ? "ChipSelectGroup-Chip-module--active--1El6c"
                        : ""
                    }`}
                  >
                    Backend
                  </div>
                  <div
                    onClick={handleActiveButtons.bind(null, 3)}
                    class={`ChipSelectGroup-Chip-module--cls2--2tjD1 ChipSelectGroup-Chip-module--cls1--336ll ${
                      activeButtons.some((num) => num === 3)
                        ? "ChipSelectGroup-Chip-module--active--1El6c"
                        : ""
                    }`}
                  >
                    Дизайн
                  </div>
                  <div
                    onClick={handleActiveButtons.bind(null, 4)}
                    class={`ChipSelectGroup-Chip-module--cls2--2tjD1 ChipSelectGroup-Chip-module--cls1--336ll ${
                      activeButtons.some((num) => num === 4)
                        ? "ChipSelectGroup-Chip-module--active--1El6c"
                        : ""
                    }`}
                  >
                    Аналитика
                  </div>
                  <div
                    onClick={handleActiveButtons.bind(null, 5)}
                    class={`ChipSelectGroup-Chip-module--cls2--2tjD1 ChipSelectGroup-Chip-module--cls1--336ll ${
                      activeButtons.some((num) => num === 5)
                        ? "ChipSelectGroup-Chip-module--active--1El6c"
                        : ""
                    }`}
                  >
                    Тестирование
                  </div>
                </div>
                <div class="WriteToUsForm-ContactsRow-module--cls2--2CbOv WriteToUsForm-ContactsRow-module--cls1--3o4RM">
                  <div class="WriteToUsForm-InputWrapper-module--cls2--3HVds WriteToUsForm-InputWrapper-module--cls1--3XTyl">
                    <label class="Input-Label-module--cls2--yfK5D Input-Label-module--cls1--3_McV">
                      <span
                        class={`${
                          activeInputs.some((num) => num === 0) ? "active" : ""
                        }`}
                      >
                        Имя Компании
                      </span>
                      <input
                        value={form.companyName.text}
                        onChange={handleChangeForm}
                        onFocus={handleActiveInput.bind(null, 0)}
                        onBlur={handleActiveInput.bind(null, 0)}
                        name="companyName"
                        class="Input-InputText-module--cls2--1y9p_ Input-InputText-module--cls1--1lNxY"
                      />
                    </label>
                    <div
                      className={`WriteToUsForm-Error-module--cls2--3DVeU WriteToUsForm-Error-module--cls1--38RV1 ${
                        form.companyName.error
                          ? "WriteToUsForm-Error-module--active--1KhNh"
                          : ""
                      }`}
                    >
                      Пожалуйста, введите Ваше имя
                    </div>
                  </div>
                  <div class="WriteToUsForm-InputWrapper-module--cls2--3HVds WriteToUsForm-InputWrapper-module--cls1--3XTyl">
                    <label class="Input-Label-module--cls2--yfK5D Input-Label-module--cls1--3_McV">
                      <span
                        class={`${
                          activeInputs.some((num) => num === 1) ? "active" : ""
                        }`}
                      >
                        Почта
                      </span>
                      <input
                        type="email"
                        value={form.email.text}
                        onChange={handleChangeForm}
                        onFocus={handleActiveInput.bind(null, 1)}
                        onBlur={handleActiveInput.bind(null, 1)}
                        name="email"
                        class="Input-InputText-module--cls2--1y9p_ Input-InputText-module--cls1--1lNxY"
                      />
                    </label>
                    <div
                      className={`WriteToUsForm-Error-module--cls2--3DVeU WriteToUsForm-Error-module--cls1--38RV1 ${
                        form.email.error
                          ? "WriteToUsForm-Error-module--active--1KhNh"
                          : ""
                      }`}
                    >
                      Пожалуйста, вашу почту
                    </div>
                  </div>
                  <div class="WriteToUsForm-InputWrapper-module--cls2--3HVds WriteToUsForm-InputWrapper-module--cls1--3XTyl">
                    <label class="Input-Label-module--cls2--yfK5D Input-Label-module--cls1--3_McV">
                      <span
                        class={`${
                          activeInputs.some((num) => num === 2) ? "active" : ""
                        }`}
                      >
                        Телефон
                      </span>
                      <input
                        type="text"
                        maxLength={12}
                        value={form.phoneNumber.text}
                        onChange={handleChangeForm}
                        onFocus={handleActiveInput.bind(null, 2)}
                        onBlur={handleActiveInput.bind(null, 2)}
                        name="phoneNumber"
                        class="Input-InputText-module--cls2--1y9p_ Input-InputText-module--cls1--1lNxY"
                      />
                    </label>
                    <div
                      className={`WriteToUsForm-Error-module--cls2--3DVeU WriteToUsForm-Error-module--cls1--38RV1 ${
                        form.phoneNumber.error
                          ? "WriteToUsForm-Error-module--active--1KhNh"
                          : ""
                      }`}
                    >
                      Пожалуйста, заполните поле
                    </div>
                  </div>
                </div>
                <div class="WriteToUsForm-MessageContainer-module--cls2--28qwq WriteToUsForm-MessageContainer-module--cls1--2gjGQ">
                  <label class="InputArea-Label-module--cls2--186Xi InputArea-Label-module--cls1--27RWN">
                    <span
                      class={`${
                        activeInputs.some((num) => num === 3) ? "active" : ""
                      }`}
                    >
                      Текст сообщения
                    </span>
                    <input
                      value={form.projectDetails.text}
                      onChange={handleChangeForm}
                      onFocus={handleActiveInput.bind(null, 3)}
                      onBlur={handleActiveInput.bind(null, 3)}
                      name="projectDetails"
                      class="InputArea-InputText-module--cls2--n-Nh7 InputArea-InputText-module--cls1--2I79l"
                    />
                  </label>
                  <div
                    className={`WriteToUsForm-Error-module--cls2--3DVeU WriteToUsForm-Error-module--cls1--38RV1 ${
                      form.projectDetails.error
                        ? "WriteToUsForm-Error-module--active--1KhNh"
                        : ""
                    }`}
                  >
                    Пожалуйста, заполните поле
                  </div>
                  <img
                    onClick={handleAttachClick}
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNi4zNjM2IDUuNDU0NTdWMThDMTYuMzYzNiAyMC40MTA5IDE0LjQxMDkgMjIuMzYzNiAxMiAyMi4zNjM2QzkuNTg5MTEgMjIuMzYzNiA3LjYzNjMxIDIwLjQxMDkgNy42MzYzMSAxOFY0LjM2MzYyQzcuNjM2MzEgMi44NTgxNyA4Ljg1ODEyIDEuNjM2MzYgMTAuMzYzNiAxLjYzNjM2QzExLjg2OSAxLjYzNjM2IDEzLjA5MDkgMi44NTgxNyAxMy4wOTA5IDQuMzYzNjJWMTUuODE4MkMxMy4wOTA5IDE2LjQxODIgMTIuNjA1NCAxNi45MDkxIDEyIDE2LjkwOTFDMTEuMzk0NSAxNi45MDkxIDEwLjkwOTEgMTYuNDE4MiAxMC45MDkxIDE1LjgxODJWNS40NTQ1N0g5LjI3MjczVjE1LjgxODJDOS4yNzI3MyAxNy4zMjM3IDEwLjQ5NDUgMTguNTQ1NSAxMiAxOC41NDU1QzEzLjUwNTQgMTguNTQ1NSAxNC43MjcyIDE3LjMyMzYgMTQuNzI3MiAxNS44MTgyVjQuMzYzNjJDMTQuNzI3MiAxLjk1Mjc1IDEyLjc3NDUgMCAxMC4zNjM2IDBDNy45NTI3NSAwIDYgMS45NTI3NSA2IDQuMzYzNjJWMThDNiAyMS4zMTY0IDguNjg5MTEgMjQgMTIgMjRDMTUuMzEwOSAyNCAxOCAyMS4zMTY0IDE4IDE4VjUuNDU0NTdIMTYuMzYzNloiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg=="
                    alt="AttachButton"
                    class="WriteToUsForm-AttachButton-module--cls2--2YyHm WriteToUsForm-AttachButton-module--cls1--11985"
                  />
                  <input
                    ref={fileRef}
                    onChange={handleAttachOnChange}
                    type="file"
                    class="WriteToUsForm-InvisibleFileInput-module--cls2--3ajJZ WriteToUsForm-InvisibleFileInput-module--cls1--3zcHc"
                  />
                </div>
              </div>
              <a
                onClick={handleSubmit}
                class="WriteToUsForm-SendButton-module--cls2--3aCUc WriteToUsForm-SendButton-module--cls1--3XEGZ Buttons-BigWhiteButton-module--cls2--g05zN Buttons-BigWhiteButton-module--cls1--2H7YS"
              >
                Отправить
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
