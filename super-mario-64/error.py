import tkinter as tk

def center_window(window: None, width: int, height: int, offset_x: int = 0, offset_y: int = 0) -> None:
    try:
        screen_width = window.winfo_screenwidth()
        screen_height = window.winfo_screenheight()
        x = (screen_width - width) // 2 - offset_x
        y = (screen_height - height) // 2 - offset_y
        window.geometry(f"{width}x{height}+{x}+{y}")
    except Exception as e:
        print(f"Error: {e}")

def App():
    global root
    
    root = tk.Tk()
    root.title("Error!")
    root.resizable(False, False)
    center_window(root, 400, 200, offset_y=45)
    
    tk.Label(root, text="Error", font=('Impact', 100), foreground="#d4af47").pack()
    
    root.mainloop()

if __name__ == "__main__":
    App()