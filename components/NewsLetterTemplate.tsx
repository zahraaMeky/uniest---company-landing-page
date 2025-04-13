import * as React from 'react';

type NewsletterTemplateProps = {
  email: string;
};

const NewsletterTemplate = ({ email }: NewsletterTemplateProps) => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        color: '#333',
        borderRadius: '8px',
        maxWidth: '600px',
        margin: '0 auto',
        border: '1px solid #ddd',
      }}
    >
      {/* Header */}
      <h2 style={{ color: '#0070f3', marginBottom: '10px' }}>📰 New Newsletter Subscription</h2>

      {/* Message */}
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        A new user has subscribed to your newsletter. Below are the details:
      </p>

      {/* Subscriber Email */}
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
            <td style={labelStyle}>📧 Email:</td>
            <td style={valueStyle}>{email}</td>
          </tr>
        </tbody>
      </table>

      {/* Footer */}
      <p style={{ marginTop: '30px', fontSize: '13px', color: '#888' }}>
        This is an automated message from your website.
      </p>
    </div>
  );
};

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

export default NewsletterTemplate;
