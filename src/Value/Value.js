import React from 'react';

class ValueComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.data) {
      return false;
    }

    return (
      <div className="attributeValue">
        {this.props.data}
      </div>
    );
  }
}

export default ValueComponent;
