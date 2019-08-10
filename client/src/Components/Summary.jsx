import React from 'react';
import faker from 'faker';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <tr class="transparent">
        <td>
          <p class="summary">change font color to white once there's a background<br />{faker.lorem.paragraph()}</p>
        </td>
      </tr>
    );
  }
}

export default Summary;