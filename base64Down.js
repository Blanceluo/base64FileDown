const dataUrlToBlob = fileStream => {
  const bytes = window.atob(fileStream) // base64 解码
  const bufferArray = new ArrayBuffer(bytes.length)  // 创建缓冲数组
  const streamView = new Uint8Array(bufferArray) // 创建视图

  for (let i = 0; i < bytes.length; i ++) {
    streamView[i] = bytes[i].charCodeAt()
  }

  return streamView
}

const imitationClickDown = () => {
  const blob = new Blob([dataUrlToBlob(fileStream)], { type: mime })
  const a = document.createElement('a')
  a.download = fileName
  a.href = URL.createObjectURL(blob)
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(blob)
}
imitationClickDown()

