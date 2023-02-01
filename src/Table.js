import { Table, Column, HeaderCell, Cell } from 'rsuite-table';

import 'rsuite-table/dist/css/rsuite-table.css';

const dataList = [
  { pharoah: 'Seka', period: 'Archaic', dynasty: 'Predynastic' },
  { pharoah: 'Khayu', period: 'Archaic', dynasty: 'Predynastic' },
  { pharoah: 'Tiu', period: 'Archaic', dynasty: 'Predynastic' },
  { pharoah: 'Tjesh', period: 'Archaic', dynasty: 'Predynastic' },
  { pharoah: 'Neheb', period: 'Archaic', dynasty: 'Predynastic' },
  { pharoah: 'Wenegbu', period: 'Archaic', dynasty: 'Predynastic' },
  //   { pharoah: '', period: 'a', dynasty: 'a@email.com' },
  //   { pharoah: '', period: 'a', dynasty: 'a@email.com' },
  //   { pharoah: '', period: 'a', dynasty: 'a@email.com' },
  //   { pharoah: '', period: 'a', dynasty: 'a@email.com' },
  //   { pharoah: '', period: 'a', dynasty: 'a@email.com' },
  //   { pharoah: '', period: 'a', dynasty: 'a@email.com' },
  //   { pharoah: '', period: 'a', dynasty: 'a@email.com' },
  //   { pharoah: '', period: 'a', dynasty: 'a@email.com' },
  //   { pharoah: '', period: 'a', dynasty: 'a@email.com' },
  //   { pharoah: '', period: 'a', dynasty: 'a@email.com' },
  //   { pharoah: '', period: 'a', dynasty: 'a@email.com' },
  //   { pharoah: '', period: 'a', dynasty: 'a@email.com' },
];

export default function BaseTable() {
  return (
    <Table data={dataList} fillHeight hover virtualized className="table">
      <Column width={100} sortable fixed resizable>
        <HeaderCell>Pharoah</HeaderCell>
        <Cell dataKey="pharoah" />
      </Column>

      <Column width={100} sortable resizable treeCol>
        <HeaderCell>Period</HeaderCell>
        <Cell dataKey="period" />
      </Column>

      <Column width={100} sortable resizable treeCol>
        <HeaderCell>Dynasty</HeaderCell>
        <Cell dataKey="dynasty"></Cell>
      </Column>
    </Table>
  );
}
