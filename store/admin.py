from django.contrib import admin
from .models import User,Order,OrderItem,Product
# Register your models here.
admin.site.register([User, Order, OrderItem, Product])
