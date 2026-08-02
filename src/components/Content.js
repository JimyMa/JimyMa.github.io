import React, {Component} from 'react'
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock'
import {withRouter} from 'react-router-dom'

import {blog_data} from '../content/blogData'

import Tex from '@matejmazur/react-katex'
import math from 'remark-math'
import 'katex/dist/katex.min.css' // `react-katex` does not import the CSS for you


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "blog_data": []
     };
  }
  componentDidMount() {
    this.setState({
      "blog_data": blog_data
    })
  }
  render() {
    return (
      <div>
      {
        blog_data.map((value, key) => {
            // eslint-disable-next-line
            if (value.id == this.props.match.params.aid) {
              return (
              <ReactMarkdown
                plugins={[math]}
                renderers={
                  {
                    code: CodeBlock,
                    inlineMath: ({value}) => <Tex math={value} />,
                    math: ({value}) => <Tex block math={value} />
                  }
                }
                key={key}
              >
                {value.content}
              </ReactMarkdown>)
            }
            else
              return ""
          }
        )
      }
      </div>
    );
  }
}

export default withRouter(Content);