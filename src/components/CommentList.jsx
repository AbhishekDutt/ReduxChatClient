import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Comment from './Comment';


export default React.createClass({

  mixins: [PureRenderMixin],

  render: function() {

    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });


    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }

});
