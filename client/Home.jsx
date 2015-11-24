const { RaisedButton } = mui;
const { Link } = ReactRouter;

Home = React.createClass({
  render() {
    return (
      <div className="home">
        <div className="overlay">
          <div className="inner">
          <div className="content">
            <h1 className="title">
            hi! i&#39;m
              <span className="name">libchaos</span>
            </h1>
            <h2 className="subtitle">
              一个酱油党
            </h2>
            <Link to="/about">
              <RaisedButton label="Hire me" secondary={true} />
            </Link>
          </div>
          </div>
        </div>
      </div>
    );
  }
});
