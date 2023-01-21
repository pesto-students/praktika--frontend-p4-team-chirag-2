import React from "react";
import { Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import { Row, Col, Divider } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

const { Dragger } = Upload;

const resumeProps = {
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

function Resume({ updateRender }) {
	return (
		<>
			<Row className="resume">
				<Col span={24}>
					<h2>Upload your latest resume</h2>
					<p className="hp-p1-body hp-mb-0">
						Upload your latest resume with all details
					</p>
					<Divider />
				</Col>
				<Col span={24}>
					<Row gutter={[16]}>
						<Col md={24} span={24} style={{ marginBottom: "20px" }}>
							<Dragger {...resumeProps}>
								<p className="ant-upload-drag-icon">
									<UploadOutlined />
								</p>
								<p className="ant-upload-text">
									Click or drag file to this area to upload
								</p>
								<p className="ant-upload-hint">
									Support for a single upload. File types: PDF, DOCX, PPTX
								</p>
							</Dragger>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
}

export default Resume;
