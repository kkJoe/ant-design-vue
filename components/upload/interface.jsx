import PropsTypes from '../_util/vue-types'

export const UploadFileStatus = PropsTypes.oneOf(['error', 'success', 'done', 'uploading', 'removed'])

// export const HttpRequestHeader {
//   [key: string]: string;
// }

export const UploadFile = PropsTypes.shape({
  uid: PropsTypes.oneOfType([
    PropsTypes.string,
    PropsTypes.number,
  ]),
  size: PropsTypes.number,
  name: PropsTypes.string,
  filename: PropsTypes.string,
  lastModified: PropsTypes.number,
  lastModifiedDate: PropsTypes.any,
  url: PropsTypes.string,
  status: UploadFileStatus,
  percent: PropsTypes.number,
  thumbUrl: PropsTypes.string,
  originFileObj: PropsTypes.any,
  response: PropsTypes.any,
  error: PropsTypes.any,
  linkProps: PropsTypes.any,
  type: PropsTypes.string,
}).loose

export const UploadChangeParam = {
  file: UploadFile,
  fileList: PropsTypes.arrayOf(UploadFile),
  event: PropsTypes.object,
}

export const ShowUploadListInterface = PropsTypes.shape({
  showRemoveIcon: PropsTypes.bool,
  showPreviewIcon: PropsTypes.bool,
}).loose

export const UploadLocale = PropsTypes.shape({
  uploading: PropsTypes.string,
  removeFile: PropsTypes.string,
  uploadError: PropsTypes.string,
  previewFile: PropsTypes.string,
}).loose
export const UploadProps = {
  type: PropsTypes.oneOf(['drag', 'select']),
  name: PropsTypes.string,
  defaultFileList: PropsTypes.arrayOf(UploadFile),
  fileList: PropsTypes.arrayOf(UploadFile),
  action: PropsTypes.string.isRequired,
  data: PropsTypes.oneOfType([PropsTypes.object, PropsTypes.func]),
  headers: PropsTypes.object,
  showUploadList: PropsTypes.oneOfType([PropsTypes.bool, ShowUploadListInterface]),
  multiple: PropsTypes.bool,
  accept: PropsTypes.string,
  beforeUpload: PropsTypes.func,
  // onChange: PropsTypes.func,
  listType: PropsTypes.oneOf(['text', 'picture', 'picture-card']),
  // className: PropsTypes.string,
  // onPreview: PropsTypes.func,
  // onRemove: PropsTypes.func,
  supportServerRender: PropsTypes.bool,
  // style: PropsTypes.object,
  disabled: PropsTypes.bool,
  prefixCls: PropsTypes.string,
  customRequest: PropsTypes.func,
  withCredentials: PropsTypes.bool,
  locale: UploadLocale,
  height: PropsTypes.number,
}

export const UploadState = {
  fileList: PropsTypes.arrayOf(UploadFile),
  dragState: PropsTypes.string,
}

export const UploadListProps = {
  listType: PropsTypes.oneOf(['text', 'picture', 'picture-card']),
  // onPreview: PropsTypes.func,
  // onRemove: PropsTypes.func,
  items: PropsTypes.arrayOf(UploadFile),
  // items: PropsTypes.any,
  progressAttr: PropsTypes.object,
  prefixCls: PropsTypes.string,
  showRemoveIcon: PropsTypes.bool,
  showPreviewIcon: PropsTypes.bool,
  locale: UploadLocale,
}