import React from 'react';
import {
  Button,
  Col,
  Menu,
}            from 'antd';
import _     from 'lodash';

const NoteActionButton = ({ isTrash, action, noteId }) => {
  if (isTrash) {
    return (
      <Button
        type="primary"
        size="small"
        icon="file-add"
        onClick={() => { action(noteId); }}
      />
    );
  }

  return (
    <Button
      type="danger"
      size="small"
      icon="delete"
      onClick={() => { action(noteId); }}
    />
  );
};

const NotesList = ({
  notes,
  currentNoteId,
  isTrash,
  over,
  onMouseEnterNote,
  onMouseExitNote,
  onNoteClick,
  action,
}) => {
  const noteIndex = _.findIndex(notes, (x) => { return (x.id === currentNoteId); });

  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={noteIndex !== -1 ? [noteIndex.toString()] : []}
    >
      {
        notes.map((note) => {
          return (
            <Menu.Item
              key={note.id}
              onMouseEnter={() => { onMouseEnterNote(note.id); }}
              onMouseLeave={() => { onMouseExitNote(note.id); }}
            >
              <Col span={20} onClick={() => { onNoteClick(note.id); }}>
                <span className="nav-text">
                  {note.title}
                </span>
              </Col>

              <Col span={2} offset={1}>
                {
                  note.id === over &&
                  <NoteActionButton
                    isTrash={isTrash}
                    action={action}
                    noteId={note.id}
                  />
                }
              </Col>
            </Menu.Item>
          );
        },
        )}
    </Menu>
  );
};

export default NotesList;
