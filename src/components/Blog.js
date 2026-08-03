import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import BookIcon from '@material-ui/icons/Book'; // 用于Google Scholar

import {BlogStyles} from '../styles/BlogStyles'
import {withStyles, withTheme} from '@material-ui/styles'

import hitLogo from '../assets/hit-logo.svg'; // 添加这一行

class Blog extends Component {
  render() {
    const {classes} = this.props
    return (
      <div className={classes.layout}>
        {/* 左侧固定个人信息部分 */}
        <Paper className={classes.sidebar} elevation={3}>
          {/* 保留头像 */}
          <div style={{display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '16px'}}>
            <Avatar className={classes.avatar} alt="Jinming Ma" src={`${process.env.PUBLIC_URL}/JimyMa-avatar.png`} />
            {/* 可以添加更多头像，它们会自动并排显示 */}
          </div>

          {/* 保留名称和职位，并添加地址 */}
          <Typography variant="h5" align="center" gutterBottom>
            Jimy Ma
          </Typography>
          <Typography variant="subtitle2" align="center" color="textSecondary" gutterBottom>
            ​AI Infra Engineer&Researcher
          </Typography>
          <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
            Shanghai Artificial Laboratory
          </Typography>
          <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
            Shanghai, China
          </Typography>


          {/* 移除电话部分 */}

          {/* 将所有logo放到一个横排上，只保留图标并添加链接，包括Twitter和Google Scholar */}
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <a href="mailto:hit16s105116@gmail.com" style={{color: 'inherit'}}>
              <MailIcon className={classes.contactIcon} />
            </a>
            <a href="https://github.com/JimyMa" style={{color: 'inherit'}} target="_blank" rel="noopener noreferrer">
              <GitHubIcon className={classes.contactIcon} />
            </a>
            <a href="https://www.linkedin.com/in/津铭-麻-76a146388" style={{color: 'inherit'}} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className={classes.contactIcon} />
            </a>
            <a href="https://twitter.com/Jim4M4" style={{color: 'inherit'}} target="_blank" rel="noopener noreferrer">
              <TwitterIcon className={classes.contactIcon} />
            </a>
            <a href="https://scholar.google.com/citations?user=D8x66cIAAAAJ&hl=en" style={{color: 'inherit'}} target="_blank" rel="noopener noreferrer">
              <BookIcon className={classes.contactIcon} />
            </a>
          </div>
          <Typography variant="body2" align="center">
            <a href="mailto:hit16s105116@gmail.com" style={{color: 'inherit'}}>
              hit16s105116@gmail.com
            </a>
          </Typography>
        </Paper>

        {/* 右侧可滚动内容部分 */}
        <div className={classes.mainContent}>
          {/* About部分 */}
          <Card className={classes.root} style={{marginBottom: '24px'}}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                About Me
              </Typography>
              <Typography variant="body1" component="p">
              Hello, I am Jinming Ma (麻 津铭).
              I received a B.S. and an M.S. from Harbin Institute of Technology, under the guidance of
              Profs. <a href="https://researchoutput.ncku.edu.tw/en/persons/hsiao-hwa-chen" target="_blank" rel="noopener noreferrer">Hsiao-Hwa Chen</a> and <a href="https://homepage.hit.edu.cn/yuqiyue" target="_blank" rel="noopener noreferrer">Qiyue Yu</a>.
  Currently, I work as a Young Researcher at the Shanghai AI Laboratory, primarily focusing on the design and implementation of high-performance distributed LLM Serving and communication libraries.
              </Typography>
            </CardContent>
          </Card>

          {/* News部分 */}
          <Card className={classes.root} style={{marginBottom: '24px'}}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                News
              </Typography>
              <div className={classes.newsList}>
              <div className={classes.newsItem}>
                <Typography variant="subtitle2" className={classes.newsDate}>
                  July 2026
                </Typography>
                <Typography variant="body2" className={classes.newsContent} component="p">
                  Our paper <strong>NanoDeploy: Taming Load Imbalance in Data-Expert Parallel Decoding under Variable-Length Workloads</strong> was accepted to ASPLOS 2027!
                </Typography>
              </div>
              <div className={classes.newsItem}>
                <Typography variant="subtitle2" className={classes.newsDate}>
                  Sept. 2025
                </Typography>
                <Typography variant="body2" className={classes.newsContent} component="p">
                  We have open-sourced <a href="https://github.com/DeepLink-org/DLSlime" target="_blank" rel="noopener noreferrer">DLSlime</a>, an efficient and flexible heterogeneous transfer toolkit.
                </Typography>
              </div>
              <div className={classes.newsItem}>
                <Typography variant="subtitle2" className={classes.newsDate}>
                  Feb. 2025
                </Typography>
                <Typography variant="body2" className={classes.newsContent} component="p">
                  Our paper <a href="https://ieeexplore.ieee.org/document/11132617/" target="_blank" rel="noopener noreferrer">Tropical: Enhancing SLO Attainment in Disaggregated LLM Serving via SLO-Aware Multiplexing</a> was accepted to the 62nd DAC!
                </Typography>
              </div>
              <div className={classes.newsItem}>
                <Typography variant="subtitle2" className={classes.newsDate}>
                  Feb. 2024
                </Typography>
                <Typography variant="body2" className={classes.newsContent} component="p">
                Our paper <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiznKP8-5GQAxVLJ0QIHeF4MzMQFnoECBkQAQ&url=https%3A%2F%2Fdl.acm.org%2Fdoi%2F10.1145%2F3649329.3658483&usg=AOvVaw1qTjoUjhwb33A1spa8QHo5&opi=89978449" target="_blank" rel="noopener noreferrer">TensorSSA: A Holistic Functionalization Approach to Optimizing Imperative Tensor Programs in Deep Learning </a> was accepted to the 61st DAC!
                </Typography>
              </div>
              </div>
            </CardContent>
          </Card>

          {/* Education部分 */}
          <Card className={classes.root} style={{marginBottom: '24px'}}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Education
              </Typography>

              {/* 北京大学经历 */}
              <div style={{marginBottom: '24px', display: 'flex', alignItems: 'flex-start', padding: '16px', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '8px'}}>
                <div style={{marginRight: '20px', flexShrink: 0}}>
                  <Avatar alt="哈尔滨工业大学" src={hitLogo} style={{width: 90, height: 90, border: '2px solid #f5f5f5'}} />
                </div>
                <div style={{flex: 1}}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Harbin Institute of Technology
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary" gutterBottom>
                  B.Eng. in Electrical Engineering (Communication Engineering)​
                  </Typography>
                  <Typography variant="body2" color="textSecondary" style={{marginBottom: '8px'}}>
                    September 2012 - June 2016
                  </Typography>
                </div>
              </div>

              {/* 清华大学经历 */}
              <div style={{display: 'flex', alignItems: 'flex-start', padding: '16px', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '8px'}}>
                <div style={{marginRight: '20px', flexShrink: 0}}>
                <Avatar alt="Harbin Institute of Technology" src={hitLogo} style={{width: 90, height: 90, border: '2px solid #f5f5f5'}} />
                </div>
                <div style={{flex: 1}}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Harbin Institute of Technology
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary" gutterBottom>
                  M.Eng. in Electronics and Communication Engineering​
                  </Typography>
                  <Typography variant="body2" color="textSecondary" style={{marginBottom: '8px'}}>
                    September 2016 - June 2018
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience部分 */}
          <Card className={classes.root} style={{marginBottom: '24px'}}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Experience
              </Typography>

              {/* 上海人工智能实验室经历 */}
              <div style={{display: 'flex', alignItems: 'flex-start', padding: '16px', backgroundColor: 'rgba(0,0,0,0.02)', marginBottom: '16px'}}>
                <div style={{flex: 1}}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    System Platform Center, Shanghai Artificial Intelligence Laboratory
                  </Typography>
                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    AI Infrastructure Researcher | Aug. 2020 - Present
                  </Typography>
                  <Typography variant="subtitle1" component="p" style={{marginBottom: '8px'}}>
                    <ul>
                      <li>Efficient LLM serving.</li>
                      <li>Heterogeneous communication libraries.</li>
                      <li>Deep learning compiler optimization.</li>
                    </ul>
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary">
                    Advisors: <a href="https://scholar.google.com/citations?user=90eREm0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Xiuhong Li</a>, Zhilin Pei
                  </Typography>
                </div>
              </div>

              <div style={{display: 'flex', alignItems: 'flex-start', padding: '16px', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '8px', marginBottom: '16px'}}>
                <div style={{flex: 1}}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                  Vision IP Group, WeiXin R&D, DJI
                  </Typography>
                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    ​​​Lead of CNN Accelerator Compiler​​ | Aug. 2018 - Aug. 2020
                  </Typography>
                  <Typography variant="subtitle1" component="p" style={{marginBottom: '8px'}}>
                    <ul>
                      <li>Tiling optimization, and SRAM and DDR management.</li>
                      <li>Orchestrated pipeline scheduling for optimal performance.</li>
                    </ul>
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary">
                    Advisor: Kang Yang, Manhong Lin
                  </Typography>
                </div>
              </div>

              <div style={{display: 'flex', alignItems: 'flex-start', padding: '16px', backgroundColor: 'rgba(0,0,0,0.02)', marginBottom: '16px'}}>
                <div style={{flex: 1}}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    SDK Group, Cambricon
                  </Typography>
                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    SDK Developer Intern | Sept. 2017 - Feb. 2018
                  </Typography>
                  <Typography variant="subtitle1" component="p" style={{marginBottom: '8px'}}>
                    <ul>
                      <li>Quantization-Aware Training.</li>
                      <li>Cambricon Caffe SDK.</li>
                    </ul>
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary">
                    Advisors: <a href="https://dl.acm.org/profile/99658688940" target="_blank" rel="noopener noreferrer">Shijin Zhang</a>, Weiwei Yang
                  </Typography>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Project部分 */}
          <Card className={classes.root} style={{marginBottom: '24px'}}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Projects
              </Typography>

              {/* 项目1 */}
              <div style={{display: 'flex', alignItems: 'flex-start', padding: '16px', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '8px', marginBottom: '16px'}}>
                <div style={{flex: 1}}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                  <a href="https://github.com/DeepLink-org/DLSlime" target="_blank" rel="noopener noreferrer">DLSlime</a>
                  </Typography>
                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    Technical Lead | May. 2025 - Present
                  </Typography>
                  <Typography variant="subtitle1" component="p" style={{marginBottom: '8px'}}>
                  The design and implementation of RDMA transfer engine, supporting core transmission modes including NVLink IPC, RDMA RC Read/Write, SendRecv and NVShmem.
                  And the integration with AI <a href="https://github.com/InternLM/InternLM" target="_blank" rel="noopener noreferrer">training</a> and <a href="https://github.com/InternLM/lmdeploy" target="_blank" rel="noopener noreferrer">inference</a> frameworks to enable Prefill-Decode disaggregation, heterogeneous pipeline parallelization, parameter server.
                  </Typography>
                </div>
              </div>
              {/* 项目2 */}
              <div style={{display: 'flex', alignItems: 'flex-start', padding: '16px', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '8px', marginBottom: '16px'}}>
                <div style={{flex: 1}}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                  <a href="https://github.com/InternLM/lmdeploy" target="_blank" rel="noopener noreferrer">lmdeploy</a>
                  </Typography>
                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    Contributor | May. 2025 - Present
                  </Typography>
                  <Typography variant="subtitle1" component="p" style={{marginBottom: '8px'}}>
                  The design and implementation of Prefill-Decode disaggregation.
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Publications部分 */}
          <Card className={classes.root} style={{marginBottom: '24px'}}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Publications
              </Typography>
              <div className={classes.publicationList}>

              {/* NanoCP */}
              <div style={{display: 'flex', alignItems: 'flex-start', padding: '16px', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '8px', marginBottom: '16px'}}>
                <div style={{flex: 1}}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    <a href="https://arxiv.org/abs/2605.21100" target="_blank" rel="noopener noreferrer">
                      NanoCP: Request-Level Dynamic Context Parallelism for Data-Expert Parallel Decoding
                    </a>
                  </Typography>
                  <Typography variant="body2" component="p">
                    Jiefei Chen*; Binbin Lin*; Jinming Ma*†; Jiangfei Duan†; Haojie Duanmu; Hao Liu; Qinxiu Cheng; Xiuhong Li; Zhilin Pei; Hui Wang†; Xingcheng Zhang; Dahua Lin
                  </Typography>
                  <Typography variant="caption" color="textSecondary" component="p" gutterBottom>
                    * Equal contribution. † Corresponding authors.
                  </Typography>
                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    arXiv preprint | 2026
                  </Typography>
                  <Typography variant="body2" component="p" style={{marginBottom: '8px'}}>
                    arXiv: <a href="https://arxiv.org/abs/2605.21100" target="_blank" rel="noopener noreferrer">2605.21100</a>
                  </Typography>
                </div>
              </div>

              {/* 论文1 */}
              <div style={{display: 'flex', alignItems: 'flex-start', padding: '16px', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '8px', marginBottom: '16px'}}>
                <div style={{flex: 1}}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    <a href="https://arxiv.org/abs/2606.16264" target="_blank" rel="noopener noreferrer">
                      Tropical: Enhancing SLO Attainment in Disaggregated LLM Serving via SLO-Aware Multiplexing
                    </a>
                  </Typography>
                  <Typography variant="body2" component="p">
                    Ma, Jinming*; Chen, Jiefei*; Li, Xiuhong; Duan, Jiangfei; Duanmu, Haojie; Zhang, Xingcheng; Yang, Chao; Lin, Dahua
                  </Typography>
                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    62nd ACM/IEEE Design Automation Conference (DAC) | 2025
                  </Typography>
                  <Typography variant="body2" component="p" style={{marginBottom: '8px'}}>
                    DOI: <a href="https://doi.org/10.1109/DAC63849.2025.11132617" target="_blank" rel="noopener noreferrer">10.1109/DAC63849.2025.11132617</a>
                  </Typography>
                  <Typography variant="body2" component="p" style={{marginBottom: '8px'}}>
                    arXiv: <a href="https://arxiv.org/abs/2606.16264" target="_blank" rel="noopener noreferrer">2606.16264</a>
                  </Typography>

                </div>
              </div>

              {/* 论文2 */}
              <div style={{display: 'flex', alignItems: 'flex-start', padding: '16px', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '8px', marginBottom: '16px'}}>
                <div style={{flex: 1}}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    A Holistic Functionalization Approach to Optimizing Imperative Tensor Programs in Deep Learning
                  </Typography>
                  <Typography variant="body2" component="p">
                    Jinming Ma*; Xiuhong Li*; Zihan Wang; Xingcheng Zhang; Shengen Yan; Yuting Chen; Yueqian Zhang; Minxi Jin; Lijuan Jiang; Yun (Eric) Liang et al.
                  </Typography>
                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    61st ACM/IEEE Design Automation Conference (DAC) | 2024
                  </Typography>
                  <Typography variant="body2" component="p" style={{marginBottom: '8px'}}>
                    DOI: 10.1145/3649329.3658483
                  </Typography>
                </div>
              </div>

              {/* 论文3 */}
              <div style={{display: 'flex', alignItems: 'flex-start', padding: '16px', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '8px', marginBottom: '16px'}}>
                <div style={{flex: 1}}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    LongTail-Bench: A Benchmark Suite for Domain-Specific Operators in Deep Learning
                  </Typography>
                  <Typography variant="body2" component="p">
                    Xiuhong Li; Shengen Yan; Lijuan Jiang; Ping Xu; Jinming Ma; Xingcheng Zhang; Dahua Lin
                  </Typography>
                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    2022 IEEE International Symposium on Workload Characterization (IISWC) | 2022-11
                  </Typography>
                  <Typography variant="body2" component="p" style={{marginBottom: '8px'}}>
                    DOI: 10.1109/iiswc55918.2022.00032
                  </Typography>
                </div>
              </div>

              {/* 论文4 */}
              <div style={{display: 'flex', alignItems: 'flex-start', padding: '16px', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '8px'}}>
                <div style={{flex: 1}}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    EasyView: Enabling and Scheduling Tensor Views in Deep Learning Compilers
                  </Typography>
                  <Typography variant="body2" component="p">
                    Contributors: Lijuan Jiang; Ping Xu; Qianchao Zhu; Xiuhong Li; Shengen Yan; Xingcheng Zhang; Dahua Lin; Wenjing Ma; Zhouyang Li; Jun Liu et al.
                  </Typography>
                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    Proceedings of the 51st International Conference on Parallel Processing | 2022-08-29
                  </Typography>
                  <Typography variant="body2" component="p" style={{marginBottom: '8px'}}>
                    DOI: 10.1145/3545008.3545037
                  </Typography>
                </div>
              </div>
              </div>
            </CardContent>
          </Card>

          {/* Teaching部分 */}
          <Card className={classes.root} style={{marginBottom: '24px'}}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Teaching
              </Typography>

              {/* 清华大学教学经历 */}
              <div style={{display: 'flex', alignItems: 'flex-start', padding: '16px', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '8px', marginBottom: '16px'}}>
                <div style={{flex: 1}}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    Shanghai Innovation Institute
                  </Typography>
                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    Invited Lecturer | Jan. 2025
                  </Typography>
                  <Typography variant="subtitle1" component="p" style={{marginBottom: '8px'}}>
                    Delivered lectures on deep learning compilers, with a focus on explaining MLIR using coalescing pass in Triton as a primary case study.​
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={classes.root} style={{marginBottom: '24px'}}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Service
              </Typography>
              <div style={{display: 'flex', alignItems: 'flex-start', padding: '16px', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '8px', marginBottom: '16px'}}>
                <div style={{flex: 1}}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                  <a href="https://github.com/DeepLink-org" target="_blank" rel="noopener noreferrer">DeepLink</a>
                  </Typography>
                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    2023 - Present
                  </Typography>
                  <Typography variant="body2" component="p">
                    ​​DeepLink admin group. Maintainer of <a href="https://github.com/DeepLink-org/DLSlime.git" target="_blank" rel="noopener noreferrer">DeepLink-org/DLSlime</a>.
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Awards section */}
          <Card className={classes.root} style={{marginBottom: '24px'}}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Awards
              </Typography>
              <ul style={{paddingLeft: '20px', margin: 0}}>
                <li style={{marginBottom: '12px'}}>
                  <Typography variant="subtitle1" color="textPrimary">
                    Spring 2017: the Master's First-Class Scholarship
                  </Typography>
                </li>
                <li style={{marginBottom: '12px'}}>
                  <Typography variant="subtitle1" color="textPrimary">
                    May. 2015: First Prize (Heilongjiang Province), National Electronic Design Competition (Spectrum Analyzer Topic)
                  </Typography>
                </li>
                <li style={{marginBottom: '12px'}}>
                  <Typography variant="subtitle1" color="textPrimary">
                    Fall 2015: Second-Class People's Scholarship
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle1" color="textPrimary">
                    Spring 2014: First-Class People's Scholarship
                  </Typography>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default withTheme(withStyles(BlogStyles)(Blog));
