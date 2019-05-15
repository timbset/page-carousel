import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';

import getPages from '../getPages';

const REFRESH_TIMEOUT = 10;
const PAGE_CHANGE_TIMEOUT = 1;

class IndexView extends React.Component {
  static async getInitialProps() {
    return {
      pageUrls: await getPages()
    };
  }

  render() {
    const pageCount = this.props.pageUrls ? this.props.pageUrls.length : 0;
    const visibilityPercent = pageCount > 0 ? 100 / pageCount : 100;

    return (
      <>
        <Head>
          <meta httpEquiv={'refresh'} content={REFRESH_TIMEOUT} />
        </Head>
        {this.props.pageUrls.map((url, index) => (
          <iframe
            key={index}
            className={`frame`}
            style={{ animationDelay: `${PAGE_CHANGE_TIMEOUT * index}s` }}
            src={url}
          />
        ))}
        <iframe className={'status-frame'} src={'/static/online.html'} />
        <style global jsx>{`        
          html, body, #__next {
            margin: 0;
            height: 100%;
            width: 100%;
            overflow: hidden;
          }
        `}</style>
        <style jsx>{`
          .frame {
            height: 100%;
            width: 100%;
            border: none;
            visibility: hidden;
            position: absolute;
            top: 0;
            animation: keyframe ${PAGE_CHANGE_TIMEOUT * pageCount}s steps(${pageCount - 1}, end) infinite;
          }
          
          .status-frame {
            position: absolute;
            top: 0;
            left: 0;
            border: none;
          }
          
          @keyframes keyframe {
            0% {
              visibility: visible;
            }
            ${visibilityPercent}% {
              visibility: hidden;
            }
            100% {
              visibility: hidden;
            }
          }
        `}</style>
      </>
    );
  }
}

export default withRouter(IndexView);
