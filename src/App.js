
import './App.css';
import Video from './component/video/video'
import LessonIntro from './component/lesson-intro/lessonintro'
import Tab from './component/tab/tab'
import DirectContent from './component/direct-content/direct-content'
import SwiperPra from './component/swiper/swiper'
import Teacher from './component/teacher/Teacher'
import active from './img/slices/试听@2x.png'
import teacherImg from './img/timg.jpeg'

function App() {
  const lessonData = {
    active: active,
    title: '像法国人一样说法语',
    score: '4.0',
    playNum: '12.33万'
  }
  //attribute:课程性质 1：直播 2：预告 3：可学/未学完 4：已学
  //sectionTitle:章节名称
  //teacherName:老师姓名
  //partNum:参与人数
  //liveTime:直播时间
  //playNum:播放次数
  //studyProgress:学习进度
  //studyStatus:学习状态
  //videoTime:视频时长

  const directData = [
    {
      attribute: 1,
      sectionTitle: '光的重要性-曝光与光线质感',
      teacherName: 'Vivi老师',
      partNum: '1212',
      isMeber:true
    }, {
      attribute: 2,
      sectionTitle: '如何管理你的色彩',
      teacherName: 'Vivi老师',
      liveTime: '12-12 16:00',
      isMeber:true
    }, {
      attribute: 3,
      sectionTitle: '曝光与光线质感',
      teacherName: '美蛋娘娘哈哈哈哈哈',
      playNum: '68322',
      studyProgress: '90%',
      videoTime: '120:30',
      isMeber:true
    }, {
      attribute: 3,
      sectionTitle: '如何管理你的色彩如何管理你的色彩',
      teacherName: 'Vivi老师',
      playNum: '683',
      videoTime: '120:30',
      isMeber:true
    }, {
      attribute: 4,
      sectionTitle: '曝光与光线质感',
      teacherName: 'Vivi老师',
      playNum: '683',
      studyStatus: '已学完',
      isMeber:false
    }, {
      attribute: 1,
      sectionTitle: '光的重要性-曝光与光线质感',
      teacherName: 'Vivi老师',
      partNum: '1212',
      isMeber:true
    }, {
      attribute: 2,
      sectionTitle: '如何管理你的色彩',
      teacherName: 'Vivi老师',
      liveTime: '12-12 16:00',
      isMeber:true
    }, {
      attribute: 3,
      sectionTitle: '曝光与光线质感',
      teacherName: '美蛋娘娘哈哈哈哈哈',
      playNum: '68322',
      studyProgress: '90%',
      videoTime: '120:30',
      isMeber:true
    }, {
      attribute: 3,
      sectionTitle: '如何管理你的色彩如何管理你的色彩',
      teacherName: 'Vivi老师',
      playNum: '683',
      videoTime: '120:30',
      isMeber:true
    }, {
      attribute: 4,
      sectionTitle: '曝光与光线质感',
      teacherName: 'Vivi老师',
      playNum: '683',
      studyStatus: '已学完',
      isMeber:false
    }, {
      attribute: 1,
      sectionTitle: '光的重要性-曝光与光线质感',
      teacherName: 'Vivi老师',
      partNum: '1212',
      isMeber:true
    }, {
      attribute: 2,
      sectionTitle: '如何管理你的色彩',
      teacherName: 'Vivi老师',
      liveTime: '12-12 16:00',
      isMeber:true
    }, {
      attribute: 3,
      sectionTitle: '曝光与光线质感',
      teacherName: '美蛋娘娘哈哈哈哈哈',
      playNum: '68322',
      studyProgress: '90%',
      videoTime: '120:30',
      isMeber:true
    }, {
      attribute: 3,
      sectionTitle: '如何管理你的色彩如何管理你的色彩',
      teacherName: 'Vivi老师',
      playNum: '683',
      videoTime: '120:30',
      isMeber:true
    }, {
      attribute: 4,
      sectionTitle: '曝光与光线质感',
      teacherName: 'Vivi老师',
      playNum: '683',
      studyStatus: '已学完',
      isMeber:false
    },{
      attribute: 4,
      sectionTitle: '曝光与光线质感',
      teacherName: 'Vivi老师',
      playNum: '683',
      studyStatus: '已学完',
      isMeber:false
    }
  ]
  const teacherInfo={
    headImf:'teacherImg',
    teacherNickName:'七七老师',
    focusNUm:'1.2万',
    isFocus:true,
    teacherIntro:'华盖创意签约摄影师，豆瓣、网易签约作者，合作杂志《人像摄影》、《咔啪》、《摄影之友》',
    belongOrg:'七七老师'
  }
  return (
    <div className="App">
      <Video />
      <div className='box'>
        <div className='main-container'>
          <LessonIntro data={lessonData} />
          <Tab />
          <DirectContent directData={directData} />
          <Teacher teacher={teacherInfo}/>

        </div>
      </div>
    </div>
  );
}

export default App;
