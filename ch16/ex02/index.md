## 解答

SIGTERM

graceful shutdownとは、安全に終了するために、作業のキリのいいところで終了することを指す。
dockerのdocker stopだと、最初にSIGTERMを送り、一定時間の経過後にSIGKILLが送られプロセスが終了する。
