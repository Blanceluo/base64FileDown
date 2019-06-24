const dataUrlToBlob = () => {
  // 将 base64 转为 blob
  const bytes = window.atob(fileStream) // base64 解码
  const ab = new ArrayBuffer(bytes.length)  // 创建缓冲数组
  const ia = new Uint8Array(ab) // 创建视图

  for (let i = 0; i < bytes.length; i ++) {
    ia[i] = bytes[i].charCodeAt()
  }

  return ia
}

const imitationClickDown = () => {
  const blob = new Blob([dataUrlToBlob(fileStream)], { type: 'application/pdf' })
  const a = document.createElement('a')
  a.download = fileName
  a.href = URL.createObjectURL(blob)
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(blob)
}
imitationClickDown()

