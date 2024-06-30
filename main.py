while True:
    compRead = input.compass_heading()
    dir = Math.round(Math.map(compRead, 0, 359, 1, 4))
    basic.show_number(dir)
    basic.pause(100)