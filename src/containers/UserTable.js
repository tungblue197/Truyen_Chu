import React from "react";
import {
  Avatar,
  Table,
  TrashIcon,
  IconButton,
  EyeOpenIcon,
  EditIcon,
} from "evergreen-ui";

export default function UserTable() {
  return (
    <Table>
      <Table.Head>
        <Table.TextCell flexBasis={60} flexShrink={0} flexGrow={0}>
          STT
        </Table.TextCell>
        <Table.TextCell flexBasis={120} flexShrink={0} flexGrow={0}>
          Ảnh đại diện
        </Table.TextCell>
        <Table.TextCell>Tên tài khoản</Table.TextCell>
        <Table.TextCell>Họ và tên</Table.TextCell>
        <Table.TextCell>Email</Table.TextCell>
        <Table.TextCell>Điều khiển</Table.TextCell>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.TextCell flexBasis={60} flexShrink={0} flexGrow={0}>
            1
          </Table.TextCell>
          <Table.TextCell flexBasis={120} flexShrink={0} flexGrow={0}>
            <Avatar />
          </Table.TextCell>
          <Table.TextCell>admin_tung</Table.TextCell>
          <Table.TextCell>Phạm Văn Tùng</Table.TextCell>
          <Table.TextCell>pvtung.197@gmail.com</Table.TextCell>
          <Table.TextCell>
            <div style={{ display: "flex" }}>
              <IconButton
                appearance="minimal"
                icon={EyeOpenIcon}
                marginRight={6}
                intent="info"
              />
              <IconButton
                appearance="minimal"
                icon={EditIcon}
                marginRight={6}
                intent="warning"
              />
              <IconButton
                appearance="minimal"
                icon={TrashIcon}
                marginRight={6}
                intent="danger"
              />
            </div>
          </Table.TextCell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
