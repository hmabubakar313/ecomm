from rest_framework import serializers
from .models import User,Order,OrderItem,Product

class UserSerializer(serializers.ModelSerializer):
    class Meta():
        model = User
        fields = "__all__"

class OrderSerializer(serializers.ModelSerializer):
    class Meta():
        model = Order
        fields = "__all__"

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta():
        model = OrderItem
        fields = "__all__"

class ProductSerializer(serializers.ModelSerializer):
    image = serializers.ImageField()  # Assuming image is a FileField in your Product model

    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'image']


