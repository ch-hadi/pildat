import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, List, ListItemText } from '@mui/material';
//
import { StyledNavItem, StyledNavItemIcon } from './styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item}  />
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }) {
  const { title, path, icon, info, children } = item;
  const [isChildVisible, setIsChildVisible] = useState(false);

  // Function to toggle the visibility of child items
  const toggleChildVisibility = () => {
    setIsChildVisible((prevIsChildVisible) => !prevIsChildVisible);
  };
  const handleClick = (event) => {
    // Prevent the default behavior of the button
    if (children) {
      event.preventDefault();
      toggleChildVisibility();
    }
  };
  return (
    <Box>
      <StyledNavItem
        component={children ? 'button' : RouterLink} // Use a button for parents with children
        to={path}
        isChildVisible={isChildVisible}
        // onClick={handleClick}
        sx={{
          '&.active': {
            color: 'text.primary',
            bgcolor: 'action.selected',
            fontWeight: 'fontWeightBold',
          },
        }}
        onClick={(event) => handleClick(event)}
      >
        <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

        <ListItemText sx={{fontSize:12}}  disableTypography primary={title} />

        {info && info}
        {children && ( // Render the arrow icon based on the visibility state
          <span>
            {isChildVisible ? (
              <KeyboardArrowUpIcon style={{ marginRight: 10, marginTop: 7 }} />
            ) : (
              <KeyboardArrowDownIcon style={{ marginRight: 10, marginTop: 7 }} />
            )}
          </span>
        )}
      </StyledNavItem>
      {isChildVisible &&
        children && ( // Display child items if isChildVisible is true
          <List style={{ marginLeft: 20, transition: 'max-height 0.5s ease-in' }}>
            {children.map((subItem) => (
              <NavItem key={subItem.title} item={subItem} />
            ))}
          </List>
        )}
    </Box>
  );
}
