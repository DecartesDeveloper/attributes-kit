import React from 'react';

import Key from 'Key/Key';
import Requirement from 'Requirement/Requirement';
import Description from 'Description/Description';
import Toggle from 'Toggle/Toggle';

import {
  isExpandableAndCollapsible,
  getExpandCollapseClassNames,
  getValue
} from 'elements/expandableCollapsibleElement';

import './objectMember.styl';


class ObjectMember extends React.Component {
  static propTypes = {
    data: React.PropTypes.object,
  }

  constructor(props) {
    super(props);

    // State hasn't been set; tree is expanded by default,
    // after a click, it collapses.
    this.state = {
      isExpanded: true,
    };
  }

  getClassNames() {
    const memberClassNames = ['attributeObjectMember'];

    if (isExpandableAndCollapsible(this.props.data)) {
      return getExpandCollapseClassNames(this.props.data, this.state, memberClassNames);
    }

    return memberClassNames;
  }

  handleExpandCollapseEvent = () => {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }

  renderValue() {
    const value = getValue(this.props.data);

    if (value) {
      return (
        <div className="attributeObjectMemberValue">
          {value}
        </div>
      );
    }

    return false;
  }

  render() {
    return (
      <div className={this.getClassNames().join(' ')}>

        <div className="attributeObjectMemberToggle">
          <Toggle
            expandCollapseEventHandler={this.handleExpandCollapseEvent}
            isExpanded={this.state.isExpanded}
          />
        </div>

        <div className="attributeObjectMemberKey">
          <Key data={this.props.data} />
        </div>

        <div className="attributeObjectMemberRequirement">
          <Requirement data={this.props.data} />
        </div>

        <div className="attributeObjectMemberDescription">
          <Description data={this.props.data} />
        </div>

        {this.renderValue()}

      </div>
    );
  }
}

export default ObjectMember;
