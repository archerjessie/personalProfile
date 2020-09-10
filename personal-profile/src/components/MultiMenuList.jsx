import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'

const options = ['HOME', 'SKILLS', 'EXPERIENCE', 'EDUCATION', 'CONTACT']
const ITEM_HEIGHT = 48

export default function MultiMenuList(props) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const onSelection = (evt, index) => {
    props.onChange(evt, index)
    handleClose()
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="multi-menu-list"
        aria-haspopup="true"
        color="inherit"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="multi-menu-list"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 5.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem key={option} onClick={(evt) => onSelection(evt, index)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
