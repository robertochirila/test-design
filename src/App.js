import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      flag: false,
    };
  }
  handleIncrement = () => {
    const { step, flag } = this.state;
    console.log(step);
    if (step === 4) {
      this.setState({ step: 0, flag: false });
    }
    setInterval(() => {
      console.log("inside async function");
      this.setState({ step: step + 1, flag: true });
    }, 3000);
  };
  render() {
    const { step, flag } = this.state;
    if (!flag) {
      this.handleIncrement();
    }
    switch (step) {
      case 1:
        return (
          <div className="wrapper">
            <div className="wrapper-box">
              <p>First Cool Paragraph</p>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
            </div>
            <div className="wrapper-box">
              <p>Second Cool Paragraph</p>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
            </div>
            <div className="wrapper-box">
              <p>Third Cool Paragraph</p>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
            </div>
            <div className="wrapper-box">
              <p>Forth Cool Paragraph</p>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
            </div>
          </div>
        );
        break;
      case 2:
        return (
          <div className="wrapper-grid">
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div className="wrapper-grid-2">
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          </div>
        );
        break;
      case 3:
        return (
          <div className="wrapper">
            <div className="wrapper-box">
              <p>First Cool Paragraph</p>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
            </div>
            <div className="wrapper-box">
              <p>Second Cool Paragraph</p>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
            </div>
            <div className="wrapper-box">
              <p>Third Cool Paragraph</p>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
            </div>
            <div className="wrapper-box">
              <p>Forth Cool Paragraph</p>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
              <div className="wrapper-column">
                <p className="column-paragraph">Column Paragraph</p>
              </div>
            </div>
          </div>
        );
        break;
      case 4:
        return (
          <div className="wrapper-grid">
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div className="wrapper-grid-2">
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          </div>
        );
        break;
      default:
        return null;
    }
  }
}

export default App;
