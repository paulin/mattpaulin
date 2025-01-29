---
layout: post
title: "Carbot 6: Carbot's Brain"
date: 2025-1-17
categories: robotics carbot ai
---

I have been working on debuggin how Carbot can see and how to get the servo outputs to work right.  In this post I wanted to explain what I had to do to get this to work.

In this post, we will break down the layers of our convolutional neural network (CNN) used to predict servo positions from images. Below is the model architecture I am using:



## Layers Used
Here are the various layers used and why.

| Layer                | Function                                      | Why It's Used                            |
|----------------------|----------------------------------------------|-----------------------------------------|
| **Conv2D (32 filters)** | Extracts low-level features (edges/textures) | Detects basic patterns in the image     |
| **MaxPooling2D**     | Reduces spatial dimensions                   | Prevents overfitting, speeds up training |
| **Conv2D (64 filters)** | Extracts complex features                   | Detects advanced patterns               |
| **MaxPooling2D**     | Further reduces dimensions                   | Simplifies computation                  |
| **Flatten**          | Converts 2D to 1D                            | Prepares for dense layers               |
| **Dense (128 units)** | High-level feature learning                  | Combines extracted features             |
| **Dropout (30%)**    | Prevents overfitting                         | Ensures generalization                  |
| **Dense (64 units)** | Additional processing                        | Refines features further                |
| **Dense (2 outputs)** | Outputs servo positions `(X, Y)`             | Constrains outputs to `[0,1]` range     |


## The python code

```python
import tensorflow as tf

model = tf.keras.Sequential([
    tf.keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(224, 224, 3)),
    tf.keras.layers.MaxPooling2D((2, 2)),
    tf.keras.layers.Conv2D(64, (3, 3), activation='relu'),  # Added another convolutional layer
    tf.keras.layers.MaxPooling2D((2, 2)),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(128, activation='relu', kernel_regularizer=tf.keras.regularizers.l2(0.01)),  # Increase neurons, add L2 regularization
    tf.keras.layers.Dropout(0.3),  # Dropout to prevent overfitting
    tf.keras.layers.Dense(64, activation='relu', kernel_regularizer=tf.keras.regularizers.l2(0.01)),
    tf.keras.layers.Dense(2, activation='sigmoid')  # Use sigmoid to constrain output to [0,1]
])
```

### Explanation of Each Layer
#### 1. Conv2D Layer (32 filters)
```python
tf.keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(224, 224, 3))
```
* Purpose: Detects low-level features such as edges, textures, and patterns.
* Why we use it: Convolution helps extract important spatial features while reducing the number of parameters compared to fully connected layers.
* Activation: ReLU to introduce non-linearity and avoid vanishing gradients.

#### 2. MaxPooling2D Layer
```python
tf.keras.layers.MaxPooling2D((2, 2))
```
* Purpose: Reduces the spatial dimensions by selecting the max value from each 2x2 region.
* Why we use it: Helps reduce computation while retaining important features, improves generalization, and reduces overfitting.

#### 3. Second Conv2D Layer (64 filters)
```python
tf.keras.layers.Conv2D(64, (3, 3), activation='relu')
```
* Purpose: Extracts more complex features from the previous layer.
* Why we use it: Builds upon previously detected patterns to identify higher-level shapes.

#### 4. Second MaxPooling2D Layer
```python
tf.keras.layers.MaxPooling2D((2, 2))
```
* Purpose: Further reduces spatial dimensions while maintaining the most significant features.

#### 5. Flatten Layer
```python
tf.keras.layers.Flatten()
```
* Purpose: Converts 2D feature maps into a 1D array.
* Why we use it: Prepares the feature maps for processing by the dense (fully connected) layers.

#### 6. First Dense Layer (128 neurons)
```python
tf.keras.layers.Dense(128, activation='relu', kernel_regularizer=tf.keras.regularizers.l2(0.01))
```
* Purpose: Learns high-level combinations of features for accurate predictions.
* Why we use it: Fully connected layers analyze extracted features in greater depth.
* Regularization: L2 regularization to prevent overfitting.

#### 7. Dropout Layer
```python
tf.keras.layers.Dropout(0.3)
```
* Purpose: Prevents overfitting by randomly disabling 30% of neurons during training.
* 0.1 - 0.3 (10% to 30%) is common.
* Higher values (e.g., 0.5) can help, but too much can slow learning.

#### 8. Second Dense Layer (64 neurons)
```python
tf.keras.layers.Dense(64, activation='relu', kernel_regularizer=tf.keras.regularizers.l2(0.01))
```
* Purpose: Further refines the learned patterns for better performance.

#### 9. Output Layer (2 neurons)
```python
tf.keras.layers.Dense(2, activation='sigmoid')
```
* Purpose: Outputs servo positions (X, Y) in the normalized range [0,1].
* Why we use it: The sigmoid activation ensures outputs stay within the expected range.

## Training


### Optimizing
These the the potential optimizers you can use, I choose Adam

* SGD (Stochastic Gradient Descent):	Uses a fixed learning rate and updates all parameters at the same rate.
* Adam (Adaptive Moment Estimation):	Adapts learning rates for different parameters using momentum and past gradients.
* RMSprop:	Similar to Adam but without momentum correction.

```python
optimizer = tf.keras.optimizers.Adam(learning_rate=0.001)
```

### Compiling
I do this step to define how the model will learn.

```python
model.compile(optimizer=optimizer, loss='mse', metrics=['mae'])
```

Note: I'm using both the MSE loss function and Mean Absolute Error for evaluation
*	Loss function: 'mse' (Mean Squared Error): MSE is more sensitive to large errors, which helps the model correct them faster.
*	Evaluation metric: 'mae' (Mean Absolute Error): MAE gives a more interpretable average error in the same units as the target variable.    

### Training the model
```python
model.fit(images_np, servo_positions_np, epochs=50, batch_size=32, validation_split=0.2)
```
What is this doing?
* Trains the model on the dataset (images_np and servo_positions_np).
* Runs for 50 epochs (full passes over the dataset) to prevents underfitting, balances accuracy and training time.
* Uses mini-batches of size 32 (updates weights after every 32 samples) because smaller batches generalize better but train slower.
* Reserves 20% of the data (validation_split=0.2) for validation to helps detect overfitting during training.          

## Issues and how to improves
* In my training data the first three data points are all [0.0, 0.0], meaning the servo was likely at a stationary position and this could bias the training.                   
