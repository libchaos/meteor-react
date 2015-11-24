const { RaisedButton } = mui;

About = React.createClass({
  render() {
    let styles = {
      label: {
        fontSize: '16px'
      }
    };
    return (
      <div className="about">
        <div className="container clearfix">
          <div className="story">
            <h3>个人信息</h3>
            <div className="desc">
               作什么作， 就是干！！！！
            </div>
            <a href="https://github.com/libchaos">
              <RaisedButton label="下载简历" secondary={true} labelStyle={styles.label}/>
            </a>
          </div>
          <div className="paper">
            <img src="http://7xojpa.com1.z0.glb.clouddn.com/portrait.jpg" />
          </div>
          <div className="info">
            <h3>联系方式</h3>
            <ul>
              <li>
                <span>姓名：</span> libchaos
              </li>
              <li>
                <span>邮箱：</span> libchaos01@163.com
              </li>
              <li>
                <span>微信：</span> 1161194741
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});
