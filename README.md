  Android

1. Sử dụng google play và tải termux

2. Mở termux và nhập
    ```sh
    termux-setup-storage && apt update && apt upgrade && pkg install curl -y && bash <(curl -s https://raw.githubusercontent.com/catalizcs/storage-data/master/install.sh)
    ```

3. Đợi mọi package, lib cài đặt thành công là có thể sử dụng

4. Lấy appstate
    - Bạn có thể sử dụng fbstate của c3c bot, nhưng cần đổi tên lại thành appstate.json hoặc đổi lại tên trong config.json
    1. Nhập
    ```sh
    node login
    ```
    2. Nhập mã xác thực hai lớp
    3. Nếu trên cmd/terminal hiện ```Đã ghi xong appstate``` tức là appstate của bạn đã được lưu lại, còn nếu ra dòng có chữ error thì appstate của bạn chưa được lưu lại, bạn cần phải kiểm tra lại thông tin tài khoản, và kiểm tra xem tài khoản của bạn có phải bị checkpoint hay không.

5. về cách sử dụng, edit, vận hành
      1. Để bật được file manager bạn chỉ cần nhập vào termux
      ```sh
      manager
      ```
      2. Để vận hành bot, bạn chỉ cần nhập vào termux
      ```sh
      cd ./miraiv2 && npm start
      ```
