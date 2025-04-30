# poc-micro-frontend

## Tính năng

- Chia sẻ React và React DOM giữa các micro frontend
- Module Federation để tải các micro frontend động
- CSS Scoping để tránh xung đột styles
- Custom hooks được chia sẻ giữa các micro frontend

## Cách chạy

### 1. Cài đặt dependencies

```bash
# Cài đặt dependencies cho tất cả các project
yarn install
```

### 2. Build và chạy các micro frontend

```bash
# Terminal 1 - MFE1
cd mfe1
yarn build
yarn serve

# Terminal 2 - MFE2
cd mfe2
yarn build
yarn serve
```

### 3. Chạy host application

```bash
# Terminal 3 - Host
cd host
yarn dev
```

### 4. Truy cập ứng dụng

- Host application: http://localhost:5173
- MFE1: http://localhost:5174
- MFE2: http://localhost:5175

## Kiểm tra việc chia sẻ React

1. Mở DevTools (F12)
2. Chuyển đến tab Network
3. Lọc (filter) bằng từ khóa "react"
4. Bạn sẽ thấy chỉ có một bản copy của React và React DOM được tải

## Cấu hình Module Federation

Mỗi micro frontend đều được cấu hình để chia sẻ React và React DOM:

```typescript
// vite.config.ts
federation({
  name: "host", // hoặc 'mfe1', 'mfe2'
  remotes: {
    mfe1: "http://localhost:5174/assets/remoteEntry.js",
    mfe2: "http://localhost:5175/assets/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
});
```

## Lưu ý

- Đảm bảo rằng các port (5173, 5174, 5175) không bị sử dụng bởi ứng dụng khác
- Nếu gặp lỗi CORS, hãy chắc chắn rằng bạn đang chạy `yarn serve` với flag `--cors`
- Host application phải chạy ở chế độ development (`yarn dev`) để có thể hot reload khi có thay đổi

## Scripts

### Host

- `yarn dev`: Chạy host application ở chế độ development
- `yarn build`: Build host application
- `yarn serve`: Chạy host application ở chế độ production

### MFE1 và MFE2

- `yarn build`: Build micro frontend
- `yarn serve`: Chạy micro frontend ở chế độ production

## Demo

Khi chạy ứng dụng, bạn sẽ thấy:

1. Host application load các micro frontend động
2. React và React DOM chỉ được tải một lần
3. Các micro frontend hoạt động độc lập nhưng chia sẻ chung React runtime
