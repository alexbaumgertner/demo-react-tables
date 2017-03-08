import React from 'react';
import {
  Table,
  Column,
  Cell
} from 'fixed-data-table';

import 'fixed-data-table/dist/fixed-data-table.css';

const rows = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3'],
  // .... and more
];

class MyCustomCell extends React.Component {
  render() {
    return (
      <div className="MyCustomCell">MyCustomCell</div>
    );
  }
}


class FixedDataTable extends React.Component {
  render() {
    return (
      <div className="table">
        <Table
          rowHeight={50}
          rowsCount={rows.length}
          width={1000}
          height={500}
          headerHeight={50}>
          <Column
            header={<Cell>Col 1</Cell>}
            cell={<Cell>Column 1 static content</Cell>}
            width={200}
          />
          <Column
            header={<Cell>Col 2</Cell>}
            cell={<MyCustomCell mySpecialProp="column2"/>}
            width={400}
          />
          <Column
            header={<Cell>Col 3</Cell>}
            cell={({rowIndex, ...props}) => (
              <Cell {...props}>
                Data for column 3: {rows[rowIndex][2]}
              </Cell>
            )}
            width={700}
          />
        </Table>
      </div>
    );
  }
}

export { FixedDataTable };
