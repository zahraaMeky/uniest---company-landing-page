import * as React from 'react';

type EmailTemplateProps = {
  name: string;
  email: string;
  phoneNumber: string;
  company: string;
  message: string;
};

const EmailTemplate = ({
  name,
  email,
  phoneNumber,
  company,
  message,
}: EmailTemplateProps) => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        color: '#333',
        borderRadius: '8px',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>📩 New Contact Form Submission</h2>

      {/* Intro Paragraph */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        You have received a new inquiry through your Uniest's contact form. The details submitted are listed below. Please review and respond at your earliest convenience.
      </p>

      {/* Submission Details */}
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          backgroundColor: '#fff',
          marginBottom: '20px',
        }}
      >
        <tbody>
          <tr>
            <td style={labelStyle}>👤 Name:</td>
            <td style={valueStyle}>{name}</td>
          </tr>
          <tr>
            <td style={labelStyle}>📧 Email:</td>
            <td style={valueStyle}>{email}</td>
          </tr>
          {phoneNumber && (
            <tr>
              <td style={labelStyle}>📱 Phone:</td>
              <td style={valueStyle}>{phoneNumber}</td>
            </tr>
          )}
          {company && (
            <tr>
              <td style={labelStyle}>🏢 Company:</td>
              <td style={valueStyle}>{company}</td>
            </tr>
          )}
          <tr>
            <td style={labelStyle}>📝 Message:</td>
            <td style={valueStyle}>{message}</td>
          </tr>
        </tbody>
      </table>

      {/* Footer */}
      <p style={{ marginTop: '30px', fontSize: '13px', color: '#888' }}>
        This message was automatically sent from your website contact form.
      </p>
    </div>
  );
};

// Reusable style objects
const labelStyle: React.CSSProperties = {
  fontWeight: 'bold',
  padding: '10px',
  textAlign: 'left',
  verticalAlign: 'top',
  backgroundColor: '#eef2f7',
  width: '30%',
};

const valueStyle: React.CSSProperties = {
  padding: '10px',
  backgroundColor: '#ffffff',
};

export default EmailTemplate;
