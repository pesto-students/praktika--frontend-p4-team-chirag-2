import React from "react";
import { Row, Col, Divider } from "antd";

import { UploadOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

const { Dragger } = Upload;

const videoProps = {
	name: "file",
	multiple: false,
	accept: "video/mp4",
	action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
	onChange(info) {
		const { status } = info.file;
		if (status !== "uploading") {
			console.log(info.file, info.fileList);
		}
		if (status === "done") {
			message.success(`${info.file.name} file uploaded successfully.`);
		} else if (status === "error") {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
	onDrop(e) {
		console.log("Dropped files", e.dataTransfer.files);
	},
};

function Video({ updateRender }) {
	return (
		<>
			<Row className="video">
				<Col span={24}>
					<h2>Upload your video introduction</h2>
					<p className="hp-p1-body hp-mb-0">
						Present yourself in a video introduction
					</p>
					<Divider />
				</Col>
				<Col span={24}>
					<Row gutter={[16]}>
						<Col md={24} span={24} style={{ marginBottom: "20px" }}>
							<Dragger {...videoProps}>
								<p className="ant-upload-drag-icon">
									<UploadOutlined />
								</p>
								<p className="ant-upload-text">
									Click or drag file to this area to upload
								</p>
								<p className="ant-upload-hint">
									Support for a single upload. Video only:mp4, 4:3, less
									than 3 min, max 15MB
								</p>
							</Dragger>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
}

export default Video;
