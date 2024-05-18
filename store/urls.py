from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # User URLs
    path('users/', UserCreateView.as_view(), name='user-create'),
    path('users/<int:pk>/', UserDeleteView.as_view(), name='user-delete'),
    path('users/<int:pk>/update/', UserUpdateView.as_view(), name='user-update'),
    path('users/list/', UserListView.as_view(), name='user-list'),

    # Order URLs
    path('orders/', OrderCreateView.as_view(), name='order-create'),
    path('orders/<int:pk>/', OrderDeleteView.as_view(), name='order-delete'),
    path('orders/<int:pk>/update/', OrderUpdateView.as_view(), name='order-update'),
    path('orders/list/', OrderListView.as_view(), name='order-list'),

    # Product URLs
    path('products/', ProductCreateView.as_view(), name='product-create'),
    path('products/<int:pk>/', ProductDeleteView.as_view(), name='product-delete'),
    path('products/<int:pk>/update/', ProductUpdateView.as_view(), name='product-update'),
    path('products/list/', ProductListView.as_view(), name='product-list'),

    # OrderItem URLs
    path('order-items/', OrderItemCreateView.as_view(), name='order-item-create'),
    path('order-items/<int:pk>/', OrderItemDeleteView.as_view(), name='order-item-delete'),
    path('order-items/<int:pk>/update/', OrderItemUpdateView.as_view(), name='order-item-update'),
    path('order-items/list/', OrderItemListView.as_view(), name='order-item-list'),
] 
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
