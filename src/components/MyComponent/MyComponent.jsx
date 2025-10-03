import React from 'react';
import { Columns, Column, Image, Text } from '@components';
import './MyComponent.css';

export default function MyComponent() {
  return (
    <div className="mc-root">
      <Image
        className="mc-top-icon"
        src="https://api.builder.io/api/v1/image/assets/32491473685643e591b758fde556dbbe/1ce39cadbd2f89177bafa8639488a3bcab1165d4?placeholderIfAbsent=true"
        alt="icon"
      />
      <Columns className="mc-top-columns columns--gap-16">
        <Column className="mc-left-58">
          <div className="mc-left-stack">
            <Image
              className="mc-accessibility-icon"
              src="https://api.builder.io/api/v1/image/assets/32491473685643e591b758fde556dbbe/84bcf95c20845c19c0dcb44d3128cdae2dff3f86?placeholderIfAbsent=true"
              alt="accessibility"
            />
            <div className="mc-disclosure">
              <div className="mc-disclosure-bg">
                <div className="mc-disclosure-black" />
              </div>
              <Text className="mc-disclosure-glyph" aria-hidden="true">􀆈</Text>
            </div>
          </div>
        </Column>

        <Column className="mc-right-41">
          <div className="mc-alert">
            <div className="mc-alert-bg">
              <div className="mc-alert-fill">
                <div className="mc-glass" />
              </div>
            </div>

            <div className="mc-title-desc">
              <Text className="mc-title">Save this message as a draft?</Text>
              <Text className="mc-desc">
                This message has not been sent and contains unsaved changes. You can save it as a draft to work on later.
              </Text>
            </div>

            <div className="mc-buttons">
              <div className="mc-btn mc-btn-primary">
                <Text className="mc-btn-label">Save</Text>
              </div>
              <div className="mc-btn mc-btn-danger-outline">
                <Text className="mc-btn-label">Don’t Save</Text>
              </div>
              <div className="mc-btn mc-btn-secondary">
                <Text className="mc-btn-label">Cancel</Text>
              </div>
            </div>
          </div>
        </Column>
      </Columns>

      <Columns className="mc-bottom-columns columns--gap-6">
        <Column className="mc-80">
          <Columns className="mc-nested columns--gap-0">
            <Column className="mc-61">
              <div className="mc-glass-alert">
                <Image
                  className="mc-app-icon"
                  src="https://api.builder.io/api/v1/image/assets/32491473685643e591b758fde556dbbe/27ec9b880da549375f526f307065dfb11ee5c497?placeholderIfAbsent=true"
                  alt="App Icon"
                />
                <div className="mc-glass-txt">
                  <Text className="mc-glass-title">Title</Text>
                  <Text className="mc-glass-desc">Description text about this alert</Text>
                </div>
              </div>
              <Image
                className="mc-add-circle"
                src="https://api.builder.io/api/v1/image/assets/32491473685643e591b758fde556dbbe/cd556915a39e25ad579facc19ef9b298a2dc548c?placeholderIfAbsent=true"
                alt="Add"
              />
            </Column>
            <Column className="mc-38">
              <div className="mc-checkboxes">
                <div className="mc-state-layer">
                  <Image
                    className="mc-check-icon"
                    src="https://api.builder.io/api/v1/image/assets/32491473685643e591b758fde556dbbe/048445671a29fdc155d895571104ae501bed1a43?placeholderIfAbsent=true"
                    alt="Checked"
                  />
                </div>
              </div>
            </Column>
          </Columns>
        </Column>
        <Column className="mc-20">
          <Image
            className="mc-delete-icon"
            src="https://api.builder.io/api/v1/image/assets/32491473685643e591b758fde556dbbe/6a26fa0e36f0a2512766ee56cab3c7d8592b398f?placeholderIfAbsent=true"
            alt="Delete"
          />
        </Column>
      </Columns>
    </div>
  );
}
