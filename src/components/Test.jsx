import { Box, AppBar, IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

export function Test() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </AppBar>
    </Box>
  );
}
