
阿里云 CentOS 7.6

## 购买

* 按量
* 国外
* 入门共享（最省钱）

![image](https://user-images.githubusercontent.com/7157346/66713160-9a10f700-edd9-11e9-8ae8-a0acfee5ab54.png)


### 选择系统
* cent_os
* 7.6 64 位
* 关闭安全加固
* 云盘 20G （省钱）
* 设置密码时，如果嫌麻烦可以使用密码模式

![image](https://user-images.githubusercontent.com/7157346/66713173-b319a800-edd9-11e9-973f-18193bdcb8aa.png)


### 配置网络
因为默认网络配置，仅允许特定端口访问服务器，所以，需要将使用到的端口号(8383~8385)配置为网络允许。
* 点击更多选择网络设置

![image](https://user-images.githubusercontent.com/7157346/66713761-6f2aa100-ede1-11e9-9d6c-b60d5398f7a2.png)

![image](https://user-images.githubusercontent.com/7157346/66713622-96806e80-eddf-11e9-9faa-d5647405d004.png)



## Feature
* 卸载阿里云盾和安骑士
* 安装 pip
* 安装 shadowsocks

## 快速安装 Shadowsocks

```sh
ssh root@xx.xx.xx.xx
curl https://raw.githubusercontent.com/zhoukekestar/drafts/master/2019-08~12/2019-10-13-ss/ss.sh | bash
```
