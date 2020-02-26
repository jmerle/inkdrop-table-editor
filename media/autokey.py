import time

def wait(ms): time.sleep(ms / 1000)

def wait_short(): wait(250)
def wait_long(): wait(500)

def simulate_typing(text):
    for ch in text:
        keyboard.send_keys(ch)
        wait(50)

ctrl = '<ctrl>'
alt = '<alt>'
shift = '<shift>'
enter = '<enter>'
tab = '<tab>'
left = '<left>'
right = '<right>'
up = '<up>'
down = '<down>'

def send_shortcut(*keys):
    wait_short()
    keyboard.send_keys('+'.join(keys))
    wait_short()

def escape(): send_shortcut(ctrl, enter)
def align_left(): send_shortcut(ctrl, alt, left)
def align_right(): send_shortcut(ctrl, alt, right)
def align_center(): send_shortcut(ctrl, alt, up)
def align_none(): send_shortcut(ctrl, alt, down)
def move_left(): send_shortcut(ctrl, left)
def move_right(): send_shortcut(ctrl, right)
def move_up(): send_shortcut(ctrl, up)
def move_down(): send_shortcut(ctrl, down)
def move_next_cell(): send_shortcut(tab)
def move_previous_cell(): send_shortcut(shift, tab)
def move_next_row(): send_shortcut(enter)
def move_row_up(): send_shortcut(ctrl, alt, shift, up)
def move_row_down(): send_shortcut(ctrl, alt, shift, down)
def move_column_left(): send_shortcut(ctrl, alt, shift, left)
def move_column_right(): send_shortcut(ctrl, alt, shift, right)

wait(2500)

mouse.click_relative_self(0, 0, 1)
wait(4000)
mouse.click_relative_self(0, 0, 1)

simulate_typing('| Command')
move_next_cell()
move_next_row()

simulate_typing('Move to next cell')
move_next_cell()
simulate_typing('Tab')

move_up()
simulate_typing('Default keybinding')
move_down()
move_next_row()

simulate_typing('Move to previous cell')
move_next_cell()
simulate_typing('Shift + Tab')
move_previous_cell()
move_next_cell()
move_next_row()

simulate_typing('Move to next row')
move_next_cell()
simulate_typing('Enter')
move_next_row()

simulate_typing('Move around')
move_next_cell()
simulate_typing('Cmd/Ctrl + Arrows')
move_up()
move_left()
move_down()
move_right()
move_next_row()

simulate_typing('Move rows around')
move_next_cell()
simulate_typing('Cmd/Ctrl + Alt + Shift + Up/Down')
move_row_up()
move_row_up()
move_row_down()
move_row_down()
move_next_row()

simulate_typing('Move columns around')
move_next_cell()
simulate_typing('Cmd/Ctrl + Alt + Shift + Left/Right')
move_column_left()
move_column_right()
move_next_row()

simulate_typing('Change alignment')
move_next_cell()
simulate_typing('Cmd/Ctrl + Alt + Arrows')
align_left()
align_center()
align_right()
align_none()
move_next_row()

simulate_typing('Exit the table')
move_next_cell()
simulate_typing('Cmd/Ctrl + Enter')
wait_long()
escape()

wait(1000)
mouse.click_relative_self(0, 0, 1)
