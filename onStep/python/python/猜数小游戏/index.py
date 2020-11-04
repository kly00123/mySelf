"""用python设计第一个游戏"""
import random
count=5
answer=random.randint(1,10)
while count>0:
    temp = input("猜一个数字:")
    guess = int(temp)
    if answer==guess:
        print("答对了")
        print("你真是个小机灵鬼")
        break
    else:
        if answer>guess:
            print("小啦！")
        else:
            print("大啦!")
        count=count-1
print("游戏结束！")
