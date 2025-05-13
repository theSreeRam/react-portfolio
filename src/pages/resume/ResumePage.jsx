import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option"; // Assuming meta options are relevant here too
import "./ResumePage.css"; // We'll create this CSS file for specific styling

export const ResumePage = () => {
  // The path to your CV in the public folder
  const cvPath = process.env.PUBLIC_URL + "/cv.pdf";

  return (
    <HelmetProvider>
      <Container className="Resume-page-header About-header">
        {" "}
        {/* You can reuse About-header or create a new one */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>Resume | {meta.title}</title>
          <meta
            name="description"
            content={meta.description || "My Resume"}
          />{" "}
          {/* Fallback description */}
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">My Resume</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="resume-container">
              {/* Option 1: Using an iframe to embed the PDF */}
              <iframe
                src={cvPath}
                title="My Resume"
                className="resume-iframe"
                frameBorder="0"
                allowFullScreen
              >
                <p>
                  Your browser does not support PDFs. Please download the PDF to
                  view it:{" "}
                  <a href={cvPath} download>
                    Download CV
                  </a>
                  .
                </p>
              </iframe>

              {/* Option 2: Using an <embed> tag (alternative to iframe) */}
              {/*
              <embed
                src={cvPath}
                type="application/pdf"
                className="resume-embed"
                width="100%"
                height="800px" // Adjust height as needed
              />
              */}

              {/* Option 3: Simple link to download/open in new tab */}
              {/*
              <div className="text-center mt-3">
                <a href={cvPath} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View CV in New Tab
                </a>
                <a href={cvPath} download className="btn btn-secondary ml-2">
                  Download CV
                </a>
              </div>
              */}
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
