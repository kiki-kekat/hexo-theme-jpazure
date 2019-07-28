'use strict';

function postIssuesHelper(options = {}) {
  const currentPostPath = options.slug;
  const currentPostTitle = options.title;
  const currentPostSource = options.source;
  /* 仮置きでブログの作者に設定 */
  /* 各ページごとにやるのであれば hexo-author を入れる */
  const currentPostAuthor = options.author;
  const currentPostId = options.id;
  let result = '';

  const linkTagHead = '<a href="https://github.com/jpazureid/blog/issues/new?';
  const linkTagEnd = '" class="article-github-link" target="_blank" rel="noopener noreferrer">問題を報告</a>';
  const newLine = '%0A';

    /* -----------------------------------
    #### Document Details

    * ID: ページの ID, なんか URL の SHA256 とかでよいかと
    * 対象記事: [ページタイトル](http://example.com)
    * Content Source: [元ファイル](./)
    * Author: **できれば作者?**
    ----------------------------------- */

var urlBody = '%23%23%23%23%20Document Details' + newLine + newLine;
    urlBody += '* ID: ' + currentPostId + newLine;
    urlBody += '* 対象記事: [' + currentPostTitle +'](https://jpazureid.github.io/blog/' + currentPostPath + '/)' + newLine;
    urlBody += '* Content Source: ' + currentPostSource + newLine;
    urlBody += '* Author: ' + currentPostAuthor;

    // console.log(urlBody);

var linkTagBody = '';
    linkTagBody = 'title=' + currentPostTitle;
    linkTagBody += '&body=' + urlBody;

  result = linkTagHead + linkTagBody + linkTagEnd;
  return result;
}

hexo.extend.helper.register('post_issues_ms', postIssuesHelper);
